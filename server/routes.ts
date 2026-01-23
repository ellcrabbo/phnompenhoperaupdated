import type { Express } from "express";
import { z } from "zod";
import { Pool } from "pg";
import { contactMessageSchema } from "@shared/schema";

export const rewrites = [
  {
    source: "/api/(.*)",
    destination: "/api/$1",
  },
  {
    source: "/(.*)",
    destination: "/index.html",
  },
];

const waitlistSchema = z.object({
  email: z.string().email().max(320),
});

const pgPool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

async function ensureWaitlistTable() {
  await pgPool.query(`
    CREATE TABLE IF NOT EXISTS waitlist (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      email TEXT NOT NULL UNIQUE,
      created_at TIMESTAMPTZ NOT NULL DEFAULT now()
    );
  `);
}

function csvEscape(value: string) {
  const v = value.replace(/"/g, '""');
  return `"${v}"`;
}

export async function registerRoutes(app: Express): Promise<void> {
  if (!process.env.DATABASE_URL) {
    console.warn("DATABASE_URL is not set; /api/waitlist will not persist signups.");
  } else {
    await ensureWaitlistTable();
  }

  app.post("/api/waitlist", async (req, res) => {
    const parsed = waitlistSchema.safeParse(req.body);
    if (!parsed.success) return res.status(400).json({ error: "Invalid email" });

    const email = parsed.data.email.toLowerCase().trim();

    if (process.env.DATABASE_URL) {
      await ensureWaitlistTable();
      await pgPool.query(
        "INSERT INTO waitlist (email) VALUES ($1) ON CONFLICT (email) DO NOTHING;",
        [email],
      );
    }

    return res.status(200).json({ ok: true });
  });

  app.get("/api/waitlist", async (req, res) => {
    if (!process.env.DATABASE_URL) {
      return res.status(200).json({ message: "Waitlist is active but not persisting data" });
    }

    await ensureWaitlistTable();
    const { rows } = await pgPool.query(
      "SELECT COUNT(*) as count FROM waitlist;",
    );

    return res.status(200).json({ 
      message: "Waitlist is active",
      count: parseInt(rows[0].count, 10)
    });
  });

  app.get("/api/waitlist/export", async (req, res) => {
    const token = req.header("x-admin-token") || "";
    const expected = process.env.WAITLIST_ADMIN_TOKEN || "";

    if (!expected || token !== expected) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    if (!process.env.DATABASE_URL) {
      return res.status(500).json({ error: "DATABASE_URL is not configured" });
    }

    await ensureWaitlistTable();
    const { rows } = await pgPool.query(
      "SELECT email, created_at FROM waitlist ORDER BY created_at DESC;",
    );

    const header = "email,created_at\n";
    const lines = rows
      .map(
        (row: { email: string; created_at: string }) =>
          `${csvEscape(String(row.email))},${csvEscape(new Date(row.created_at).toISOString())}`,
      )
      .join("\n");

    const csv = header + (lines ? `${lines}\n` : "");

    res.setHeader("Content-Type", "text/csv; charset=utf-8");
    res.setHeader("Content-Disposition", "attachment; filename=waitlist.csv");
    return res.status(200).send(csv);
  });

  app.post("/api/contact", async (req, res) => {
    const validated = contactMessageSchema.safeParse(req.body);
    if (!validated.success) {
      return res.status(400).json({
        success: false,
        errors: validated.error.errors,
      });
    }

    const validatedData = validated.data;

    console.log("Contact form submission:", {
      name: validatedData.name,
      email: validatedData.email,
      message: validatedData.message,
      timestamp: new Date().toISOString(),
    });

    return res.status(200).json({
      success: true,
      message: "Message received successfully",
    });
  });
}
