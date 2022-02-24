import prisma from '../../../_helpers/prisma.js'
import handleErrors from '../../../_helpers/handle-errors.js'

const controllersApiLikeslistShow = async (req, res) => {
  try {
    // const { session: { user: { id: userId } } } = req
    const likedBooks = await prisma.likedBooks.findUnique({
      where: {
        userId: 15
      },
      select: {
        books: true
      }
    })
    return res.status(201).json(likedBooks)
  } catch (err) {
    return handleErrors(res, err)
  }
}

export default controllersApiLikeslistShow
