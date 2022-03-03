import prisma from '../../../_helpers/prisma.js'
import handleErrors from '../../../_helpers/handle-errors.js'

const controllersApiCommentShow = async (req, res) => {
  try {
    const comment = await prisma.comment.findUnique({
      where: {
        id: Number(req.params.id)
      },
      include: {
        User: {
          select: {
            avatar: true
          }
        }
      }
    })
    console.log(comment)

    return res.status(201).json(comment)
  } catch (err) {
    return handleErrors(res, err)
  }
}

export default controllersApiCommentShow
