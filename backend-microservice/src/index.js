import cors from 'cors'
import express from 'express'

const app = express()
const port = Number(process.env.PORT) || 3002
const corsOrigin = process.env.CORS_ORIGIN || 'http://localhost:5173'

app.use(
  cors({
    origin: corsOrigin,
  }),
)

app.get('/api/stats', (_req, res) => {
  res.send('5')
})

app.listen(port, () => {
  console.log(`Microservice running on http://localhost:${port}`)
})
