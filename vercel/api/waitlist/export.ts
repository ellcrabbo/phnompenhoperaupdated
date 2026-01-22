import { Pool } from "pg";
import express from "express";
// other existing imports...

// --- Local dev waitlist helpers (Express) ---
const databaseUrl =
  process.env.DATABASE_URL ||
  process.env.POSTGRES_URL ||
  process.env.POSTGRES_URL_NON_POOLING ||
  process.env.VERCEL_POSTGRES_URL ||
  process.env.VERCEL_POSTGRES_URL_NON_POOLING;

const waitlistPool = new Pool({ connectionString: databaseUrl });

async function ensureWaitlistTable() {
  if (!databaseUrl) return;
  await waitlistPool.query(`
    CREATE TABLE IF NOT EXISTS waitlist (
      id BIGSERIAL PRIMARY KEY,
      email TEXT NOT NULL UNIQUE,
      created_at TIMESTAMPTZ NOT NULL DEFAULT now()
    );
  `);
}

function csvEscape(v: string) {
  return `"${v.replace(/"/g, '""')}"`;
}

export async function registerRoutes(app: express.Express) {
  // Ensure local dev waitlist routes are registered before Vite middleware.
  await ensureWaitlistTable();

  // Explicitly respond on GET so the browser doesn't receive bundled source from Vite.
  app.get("/api/waitlist", (_req, res) => {
    return res.status(405).json({ error: "Method Not Allowed" });
  });

  app.post("/api/waitlist", async (req, res) => {
    const raw = String((req as any).body?.email ?? "");
    const email = raw.toLowerCase().trim();
    if (!email || !email.includes("@")) {
      return res.status(400).json({ error: "Invalid email" });
    }

    if (!databaseUrl) {
      return res.status(500).json({ error: "DATABASE_URL or POSTGRES_URL not set" });
    }

    await ensureWaitlistTable();
    await waitlistPool.query(
      `INSERT INTO waitlist (email) VALUES ($1) ON CONFLICT (email) DO NOTHING;`,
      [email]
    );

    return res.status(200).json({ ok: true });
  });

  app.get("/api/waitlist/export", async (req, res) => {
    const token = String(req.header("x-admin-token") ?? "");
    const expected = process.env.WAITLIST_ADMIN_TOKEN ?? "";

    if (!expected || token !== expected) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    if (!databaseUrl) {
      return res.status(500).json({ error: "DATABASE_URL or POSTGRES_URL not set" });
    }

    await ensureWaitlistTable();
    const { rows } = await waitlistPool.query(
      `SELECT email, created_at FROM waitlist ORDER BY created_at DESC;`
    );

    const header = "email,created_at\n";
    const lines = rows
      .map((r: any) => `${csvEscape(String(r.email))},${csvEscape(new Date(r.created_at).toISOString())}`)
      .join("\n");

    const csv = header + (lines ? lines + "\n" : "");

    res.setHeader("Content-Type", "text/csv; charset=utf-8");
    res.setHeader("Content-Disposition", "attachment; filename=waitlist.csv");
    return res.status(200).send(csv);
  });

  // existing routes below, do not remove or refactor
  // ...
}
