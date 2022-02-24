import prisma from '../../../_helpers/prisma.js'
import handleErrors from '../../../_helpers/handle-errors.js'

const test = async (req, res) => {
  try {
    const { id } = req
    const likedBook = await prisma.book.findUnique({
      where: {
        id
      }
    })
    return res.status(201).json(likedBook)
  } catch (err) {
    return handleErrors(res, err)
  }
}

export default test
