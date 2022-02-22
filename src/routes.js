import { Router } from 'express'

const router = Router()

// STATIC
router.get('/', (await import('./controllers/static/home.js')).default)
router.get('/api/search', (await import('./controllers/api/search.js')).default)
router.get('/api/showOne', (await import('./controllers/api/showOne.js')).default)

export default router
