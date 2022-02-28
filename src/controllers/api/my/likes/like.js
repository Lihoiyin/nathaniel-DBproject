import prisma from '../../../_helpers/prisma.js'
import handleErrors from '../../../_helpers/handle-errors.js'

const controllersApiLikeslistCreate = async (req, res) => {
  try {
    const { session: { user: { id: userId } } } = req
    const likedBook = await prisma.user.update({
      where: {
        id: Number(userId)
      },
      data: {
        likedBooks: {
          upsert: {
            create: {
              bookId: req.params.bookId
            },
            update: {
              bookId: req.params.bookId
            },
            where: {
              bookId: req.params.bookId
            }
          }
        }
      }
    })
    return res.status(201).json(likedBook)
  } catch (err) {
    return handleErrors(res, err)
  }
}

export default controllersApiLikeslistCreate
