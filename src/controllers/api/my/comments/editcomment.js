import yup from 'yup'

import prisma from '../../../_helpers/prisma.js'
import handleErrors from '../../../_helpers/handle-errors.js'
import uploadFileAsync from '../../../_helpers/upload-file.js'

const commentSchema = yup.object({
  content: yup.string().required(),
  image: yup.mixed()
})

const controllersApiCommentCreate = async (req, res) => {
  try {
    const { body } = req
    const verifiedData = await commentSchema.validate(body, { abortEarly: false, stripUnknown: true })
    await uploadFileAsync(verifiedData, req)
    const comment = await prisma.comment.update({
      where: {
        id: Number(req.params.id)
      },
      data: {
        bookId: req.params.bookId,
        content: verifiedData.content,
        image: verifiedData.image
      }
    })
    console.log(comment)
    return res.status(201).json(comment)
  } catch (err) {
    return handleErrors(res, err)
  }
}

export default controllersApiCommentCreate
