type VercelRequest = any;
type VercelResponse = any;
import { Pool } from "pg";

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

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
  if (req.method !== "POST") return res.status(405).end();

  const email = String((req.body?.email ?? "")).toLowerCase().trim();
  if (!email || !email.includes("@")) return res.status(400).json({ error: "Invalid email" });

  if (!process.env.DATABASE_URL) return res.status(500).json({ error: "DATABASE_URL not set" });

  await ensureWaitlistTable();
  await pool.query(
    `INSERT INTO waitlist (email) VALUES ($1) ON CONFLICT (email) DO NOTHING;`,
    [email]
  );

  return res.status(200).json({ ok: true });
}