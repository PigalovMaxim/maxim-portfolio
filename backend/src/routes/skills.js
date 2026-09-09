import { Router } from 'express'
import { pool } from '../db.js'

export const skillsRouter = Router()

skillsRouter.get('/', async (_req, res, next) => {
  try {
    const { rows } = await pool.query(
      `
        SELECT id, name, category, sort_order
        FROM skills
        ORDER BY sort_order ASC, id ASC
      `,
    )

    res.json(rows)
  } catch (error) {
    next(error)
  }
})
