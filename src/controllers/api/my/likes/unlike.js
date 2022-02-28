import prisma from '../../../_helpers/prisma.js'
import handleErrors from '../../../_helpers/handle-errors.js'

const controllersApiWishlistsDestroy = async (req, res) => {
  try {
    const { session: { user: { id: userId } } } = req
    const unlikedBook = await prisma.user.update({
      where: {
        id: Number(userId)
      },
      data: {
        likedBooks: {
          delete: { bookId: req.params.bookId }
        }
      }
    })

    return res.status(200).json(unlikedBook)
  } catch (err) {
    return handleErrors(res, err)
  }
}

export default [

  controllersApiWishlistsDestroy
]
