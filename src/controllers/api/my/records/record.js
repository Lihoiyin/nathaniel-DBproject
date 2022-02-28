import prisma from '../../../_helpers/prisma.js'
import handleErrors from '../../../_helpers/handle-errors.js'

const controllersApiRecordCreate = async (req, res) => {
  try {
    const { session: { user: { id: userId } } } = req
    const record = await prisma.user.update({
      where: {
        id: Number(userId)
      },
      data: {
        bookRecords: {
          upsert: {
            create: {
              bookId: req.params.bookId
            },
            update: {
              bookId: req.params.bookId
            },
            where: {
              bookId: req.params.bookId
            }
          }
        }
      }
    })
    return res.status(201).json(record)
  } catch (err) {
    return handleErrors(res, err)
  }
}

export default controllersApiRecordCreate
