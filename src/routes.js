import { Router } from 'express'
import authenticateUser from './_middlewares/authenticate-user.js'

const router = Router()

// STATIC
router.get('/', (await import('./controllers/pages/books/index.js')).default)
// API | BOOKS
router.get('/api/books/search/:q1&:q2&:q3&:q4', (await import('./controllers/api/books/search.js')).default)
router.get('/api/books/show/:bookId', (await import('./controllers/api/books/show.js')).default)
// API | Auth
router.post('/api/auth/signup', (await import('./controllers/api/auth/signup.js')).default)
router.post('/api/auth/login', (await import('./controllers/api/auth/login.js')).default)
router.delete('/api/auth/logout', (await import('./controllers/api/auth/logout.js')).default)
// API | COMMENTS
router.get('/api/comments/:bookId', (await import('./controllers/api/comments/comments.js')).default)
// API | MY PROFILE | AUTH REQUIRED
router.get('/api/my/profile', authenticateUser('json'), (await import('./controllers/api/my/profile/profile.js')).default)
router.put('/api/my/profile', authenticateUser('json'), (await import('./controllers/api/my/profile/edit.js')).default)
// API | MY COMMENTS
router.get('/api/my/comments/:bookId', authenticateUser('json'), (await import('./controllers/api/my/comments/comments.js')).default)
router.put('/api/my/comment/:bookId', authenticateUser('json'), (await import('./controllers/api/my/comments/comment.js')).default)
router.put('/api/my/deletecomment/:id', authenticateUser('json'), (await import('./controllers/api/my/comments/deletecomment.js')).default)
router.get('/api/my/userId', authenticateUser('json'), (await import('./controllers/api/my/comments/userId.js')).default)
router.put('/api/my/editcomment/:id&:bookId', authenticateUser('json'), (await import('./controllers/api/my/comments/editcomment.js')).default)
router.get('/api/my/commentshow/:id', authenticateUser('json'), (await import('./controllers/api/my/comments/commentshow.js')).default)
// API | MY RECORDS
router.get('/api/my/recordslist', authenticateUser('json'), (await import('./controllers/api/my/records/recordslist.js')).default)
router.put('/api/my/record/:bookId', authenticateUser('json'), (await import('./controllers/api/my/records/record.js')).default)
// API | MY LIKESLIST
router.get('/api/my/likeslist', authenticateUser('json'), (await import('./controllers/api/my/likes/likeslist.js')).default)
router.put('/api/my/like/:bookId', authenticateUser('json'), (await import('./controllers/api/my/likes/like.js')).default)
router.put('/api/my/unlike/:bookId', authenticateUser('json'), (await import('./controllers/api/my/likes/unlike.js')).default)
// PAGES | BOOKS
router.get('/results', (await import('./controllers/pages/books/results.js')).default)
router.get('/books', (await import('./controllers/pages/books/index.js')).default)
router.get('/book/:id', (await import('./controllers/pages/books/show.js')).default)
// PAGES | MY BOOKS
router.get('/my/results', authenticateUser('json'), (await import('./controllers/pages/my/books/results.js')).default)
router.get('/my/books', authenticateUser('json'), (await import('./controllers/pages/my/books/index.js')).default)
router.get('/my/book/:id', authenticateUser('json'), (await import('./controllers/pages/my/books/show.js')).default)
// PAGES | Auth
router.get('/signup', (await import('./controllers/pages/auth/signup.js')).default)
router.get('/login', (await import('./controllers/pages/auth/login.js')).default)
// PAGES | MY PROFILE
router.get('/my/profile', authenticateUser('json'), (await import('./controllers/pages/my/profile/profile.js')).default)
router.get('/my/profile/edit', authenticateUser('json'), (await import('./controllers/pages/my/profile/edit.js')).default)
// PAGES | MY LIKESLIST
router.get('/my/likeslist', authenticateUser('json'), (await import('./controllers/pages/my/likes/likeslist.js')).default)
// PAGES | MY RECORDS
router.get('/my/recordslist', authenticateUser('json'), (await import('./controllers/pages/my/records/recordslist.js')).default)
// PAGES | MY RECORDS
router.get('/my/editcomment/:id&:bookId', authenticateUser('json'), (await import('./controllers/pages/my/comments/editcomment.js')).default)
// clear data
router.delete('/deleteAll', authenticateUser('json'), (await import('./controllers/api/deleteAll.js')).default)
export default router
