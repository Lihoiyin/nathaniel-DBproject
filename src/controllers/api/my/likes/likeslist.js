import prisma from '../../../_helpers/prisma.js'
import handleErrors from '../../../_helpers/handle-errors.js'

const controllersApiLikeslistShow = async (req, res) => {
  try {
    const { session: { user: { id: userId } } } = req

    const likedBooks = await prisma.user.findFirst({
      where: {
        id: Number(userId)
      },
      select: {
        likedBooks: true
      }
    })
    console.log(likedBooks)

    return res.status(201).json(likedBooks)
  } catch (err) {
    return handleErrors(res, err)
  }
}

export default controllersApiLikeslistShow
