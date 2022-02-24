import prisma from '../../../_helpers/prisma.js'
import handleErrors from '../../../_helpers/handle-errors.js'

const controllersApiLikeslistCreate = async (req, res) => {
  try {
    // const { session: { user: { id: userId } } } = req
    console.log(req.body)
    const likedBook = await prisma.likedBooks.update({
      where: {
        userId: Number(req.body.id)
      },
      data: {
        books: {
          upsert: {
            create: {
              bookId: '12'
            },
            update: {
              bookId: '12'
            },
            where: {
              bookId: '12'
            }
          }
        }
      },
      include: {
        books: true
      }
    })
    console.log(likedBook)
    return res.status(201).json(likedBook)
  } catch (err) {
    return handleErrors(res, err)
  }
}

export default controllersApiLikeslistCreate
