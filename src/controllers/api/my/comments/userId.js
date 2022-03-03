const controllersApiUserId = async (req, res) => {
  console.log(req.session.user.id)

  return res.status(201).json(req.session.user.id)
}

export default controllersApiUserId
