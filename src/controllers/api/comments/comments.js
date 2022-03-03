import prisma from '../../_helpers/prisma.js'
import handleErrors from '../../_helpers/handle-errors.js'

const controllersApiCommentsShow = async (req, res) => {
  try {
    const comments = await prisma.comment.findMany({
      where: {
        bookId: req.params.bookId
      },
      include: {
        User: {
          select: {
            avatar: true
          }
        }
      },
      orderBy: {
        id: 'asc'
      }
    })
    console.log(comments)

    return res.status(201).json(comments)
  } catch (err) {
    return handleErrors(res, err)
  }
}

export default controllersApiCommentsShow
