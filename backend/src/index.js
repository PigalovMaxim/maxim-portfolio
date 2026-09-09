import cors from 'cors'
import express from 'express'
import { initDb } from './db.js'
import { skillsRouter } from './routes/skills.js'

const app = express()
const port = Number(process.env.PORT) || 3001
const corsOrigin = process.env.CORS_ORIGIN || 'http://localhost:5173'

app.use(
  cors({
    origin: corsOrigin,
  }),
)
app.use(express.json())

app.get('/api/health', (_req, res) => {
  res.json({ ok: true })
})

app.use('/api/skills', skillsRouter)

app.use((error, _req, res, _next) => {
  console.error(error)
  res.status(500).json({ message: 'Internal server error' })
})

async function start() {
  await initDb()

  app.listen(port, () => {
    console.log(`API running on http://localhost:${port}`)
  })
}

start().catch((error) => {
  console.error('Failed to start server', error)
  process.exit(1)
})
