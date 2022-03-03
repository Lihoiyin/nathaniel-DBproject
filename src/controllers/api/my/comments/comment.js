import yup from 'yup'

import prisma from '../../../_helpers/prisma.js'
import handleErrors from '../../../_helpers/handle-errors.js'
import uploadFileAsync from '../../../_helpers/upload-file.js'

const commentSchema = yup.object({
  content: yup.string(),
  image: yup.mixed()
})

const controllersApiCommentCreate = async (req, res) => {
  try {
    const { body, session: { user: { id: userId } } } = req
    console.log(body, userId)
    const verifiedData = await commentSchema.validate(body, { abortEarly: false, stripUnknown: true })
    await uploadFileAsync(verifiedData, req)
    const comment = await prisma.user.update({
      where: {
        id: Number(userId)
      },
      data: {
        comments: {
          create: {
            bookId: req.params.bookId,
            content: verifiedData.content,
            image: verifiedData.image
          }
        }
      },
      include: {
        comments: true
      }
    })
    return res.status(201).json(comment)
  } catch (err) {
    return handleErrors(res, err)
  }
}

export default controllersApiCommentCreate
