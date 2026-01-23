type VercelRequest = any;
type VercelResponse = any;
import { Pool } from "pg";

const databaseUrl =
  process.env.DATABASE_URL ||
  process.env.POSTGRES_URL ||
  process.env.POSTGRES_URL_NON_POOLING ||
  process.env.VERCEL_POSTGRES_URL ||
  process.env.VERCEL_POSTGRES_URL_NON_POOLING;

const pool = new Pool({ connectionString: databaseUrl });

async function ensureWaitlistTable() {
  if (!databaseUrl) return;
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

  if (!databaseUrl) {
    return res.status(500).json({ error: "DATABASE_URL or POSTGRES_URL not set" });
  }

  await ensureWaitlistTable();
  await pool.query(
    `INSERT INTO waitlist (email) VALUES ($1) ON CONFLICT (email) DO NOTHING;`,
    [email]
  );

  return res.status(200).json({ ok: true });
}
