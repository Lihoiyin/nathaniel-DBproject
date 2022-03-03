import prisma from '../../../_helpers/prisma.js'
import handleErrors from '../../../_helpers/handle-errors.js'

const controllersApiCommentDestroy = async (req, res) => {
  try {
    const deletedComments = await prisma.comment.delete({
      where: {
        id: Number(req.params.id)
      }
    })

    return res.status(200).json(deletedComments)
  } catch (err) {
    return handleErrors(res, err)
  }
}

export default [

  controllersApiCommentDestroy
]
