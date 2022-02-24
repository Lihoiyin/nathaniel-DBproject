import prisma from '../../../_helpers/prisma.js'
import handleErrors from '../../../_helpers/handle-errors.js'

const controllersApiRecordslistCreate = async (req, res) => {
  try {
    const { body, session: { user: { id: userId } } } = req
    const recordedBook = await prisma.user.update({
      where: {
        id: userId
      },
      data: {
        records: {
          books: [{
            createOrConnect: body.book.id
          }]
        }
      }
    })
    return res.status(201).json(recordedBook)
  } catch (err) {
    return handleErrors(res, err)
  }
}

export default controllersApiRecordslistCreate
