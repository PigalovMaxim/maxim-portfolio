import pg from 'pg'

const { Pool } = pg

const databaseUrl = process.env.DATABASE_URL

if (!databaseUrl) {
  throw new Error('DATABASE_URL is not set')
}

export const pool = new Pool({
  connectionString: databaseUrl,
})

const SEED_SKILLS = [
  ['React', 'Frontend', 1],
  ['TypeScript', 'Frontend', 2],
  ['Redux Toolkit', 'Frontend', 3],
  ['RTK Query', 'Frontend', 4],
  ['SCSS', 'Frontend', 5],
  ['Vite', 'Frontend', 6],
  ['Feature-Sliced Design', 'Frontend', 7],
  ['Node.js', 'Backend', 8],
  ['Express', 'Backend', 9],
  ['PostgreSQL', 'Backend', 10],
]

export async function initDb() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS skills (
      id SERIAL PRIMARY KEY,
      name VARCHAR(120) NOT NULL UNIQUE,
      category VARCHAR(80) NOT NULL,
      sort_order INTEGER NOT NULL DEFAULT 0
    )
  `)

  await pool.query(
    `
      INSERT INTO skills (name, category, sort_order)
      VALUES ${SEED_SKILLS.map((_, index) => `($${index * 3 + 1}, $${index * 3 + 2}, $${index * 3 + 3})`).join(', ')}
      ON CONFLICT (name) DO NOTHING
    `,
    SEED_SKILLS.flat(),
  )
}
