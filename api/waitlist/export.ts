type VercelRequest = any;
type VercelResponse = any;
import { Pool } from "pg";

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

function csvEscape(v: string) {
  return `"${v.replace(/"/g, '""')}"`;
}

async function ensureWaitlistTable() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS waitlist (
      id BIGSERIAL PRIMARY KEY,
      email TEXT NOT NULL UNIQUE,
      created_at TIMESTAMPTZ NOT NULL DEFAULT now()
    );
  `);
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const token = String(req.headers["x-admin-token"] ?? "");
  const expected = process.env.WAITLIST_ADMIN_TOKEN ?? "";

  if (!expected || token !== expected) return res.status(401).json({ error: "Unauthorized" });
  if (!process.env.DATABASE_URL) return res.status(500).json({ error: "DATABASE_URL not set" });

  await ensureWaitlistTable();

  const { rows } = await pool.query(`SELECT email, created_at FROM waitlist ORDER BY created_at DESC;`);

  const header = "email,created_at\n";
  const lines = rows
    .map((r: any) => `${csvEscape(String(r.email))},${csvEscape(new Date(r.created_at).toISOString())}`)
    .join("\n");

  const csv = header + (lines ? lines + "\n" : "");

  res.setHeader("Content-Type", "text/csv; charset=utf-8");
  res.setHeader("Content-Disposition", "attachment; filename=waitlist.csv");
  return res.status(200).send(csv);
}