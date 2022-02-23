import { Router } from 'express'
import authenticateUser from './_middlewares/authenticate-user.js'

const router = Router()

// STATIC
router.get('/', (await import('./controllers/static/home.js')).default)

// API | BOOKS
router.get('/api/books/search', (await import('./controllers/api/books/search.js')).default)
router.get('/api/books/show', (await import('./controllers/api/books/show.js')).default)
// API | Auth
router.post('/api/auth/signup', (await import('./controllers/api/auth/signup.js')).default)
router.post('/api/auth/login', (await import('./controllers/api/auth/login.js')).default)
router.delete('/api/auth/logout', (await import('./controllers/api/auth/logout.js')).default)
// API | MY PROFILE | AUTH REQUIRED
router.get('/api/my/profile', authenticateUser('json'), (await import('./controllers/api/my/profile/profile.js')).default)
router.put('/api/my/profile', authenticateUser('json'), (await import('./controllers/api/my/profile/edit.js')).default)
// API | MY LIKESLIST
router.get('/api/my/likeslist', authenticateUser('json'), (await import('./controllers/api/my/likes/likeslist.js')).default)
router.post('/api/my/like', authenticateUser('json'), (await import('./controllers/api/my/likes/like.js')).default)
router.delete('/api/my/like', authenticateUser('json'), (await import('./controllers/api/my/likes/unlike.js')).default)
// API | MY RECORDS
router.get('/api/my/record/recordslist', authenticateUser('json'), (await import('./controllers/api/my/likes/likeslist.js')).default)
router.post('/api/my/record/record', authenticateUser('json'), (await import('./controllers/api/my/likes/like.js')).default)
// PAGES | BOOKS
router.get('/results', (await import('./controllers/pages/books/results.js')).default)
router.get('/', (await import('./controllers/pages/books/index.js')).default)
// PAGES | Auth
router.get('/signup', (await import('./controllers/pages/auth/signup.js')).default)
router.get('/login', (await import('./controllers/pages/auth/login.js')).default)
// PAGES | MY PROFILE
router.get('/my/profile', authenticateUser('json'), (await import('./controllers/pages/my/profile/profile.js')).default)
router.get('/my/profile/edit', authenticateUser('json'), (await import('./controllers/pages/my/profile/edit.js')).default)
// PAGES | MY LIKESLIST
router.get('/my/likeslist', authenticateUser('json'), (await import('./controllers/pages/my/likes/likeslist.js')).default)
// PAGES | MY RECORDS
router.get('/my/recoedslist', authenticateUser('json'), (await import('./controllers/pages/my/records/recordslist.js')).default)

export default router
