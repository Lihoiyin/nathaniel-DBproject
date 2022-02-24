import prisma from '../../../_helpers/prisma.js'
import handleErrors from '../../../_helpers/handle-errors.js'

const controllersApiWishlistsDestroy = async (req, res) => {
  try {
    // const { params: { id } } = req
    const unlikedBook = await prisma.likedBooks.update({
      where: {
        id: 2
      },
      data: {
        books: {
          delete: { bookId: '2' }
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
