import { Router } from 'express'
import authenticateUser from './_middlewares/authenticate-user.js'

const router = Router()

// STATIC
router.get('/', (await import('./controllers/static/home.js')).default)

// 3rd party API
router.get('/api/search', (await import('./controllers/api/search.js')).default)
router.get('/api/show', (await import('./controllers/api/show.js')).default)
// Auth
router.post('/api/auth/signup', (await import('./controllers/api/auth/signup.js')).default)
router.post('/api/auth/login', (await import('./controllers/api/auth/login.js')).default)
router.delete('/api/auth/logout', (await import('./controllers/api/auth/logout.js')).default)
// API | MY PROFILE | AUTH REQUIRED
router.get('/api/profile', authenticateUser('json'), (await import('./controllers/api/profile/profile.js')).default)
router.put('/api/profile', authenticateUser('json'), (await import('./controllers/api/profile/edit.js')).default)

export default router
