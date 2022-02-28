import prisma from '../_helpers/prisma.js'
import handleErrors from '../_helpers/handle-errors.js'

const deleteAll = async (req, res) => {
  try {
    const deleteUsers = await prisma.user.deleteMany({
    })
    const deleteLikedBooks = await prisma.likedBooks.deleteMany({
    })
    return res.status(201).json(deleteUsers, deleteLikedBooks)
  } catch (err) {
    return handleErrors(res, err)
  }
}

export default deleteAll
