import prisma from '../../../_helpers/prisma.js'
import handleErrors from '../../../_helpers/handle-errors.js'

const controllersApiRecordShow = async (req, res) => {
  try {
    const { session: { user: { id: userId } } } = req

    const records = await prisma.user.findUnique({
      where: {
        id: Number(userId)
      },
      select: {
        bookRecords: true
      }
    })
    console.log(records)

    return res.status(201).json(records)
  } catch (err) {
    return handleErrors(res, err)
  }
}

export default controllersApiRecordShow
