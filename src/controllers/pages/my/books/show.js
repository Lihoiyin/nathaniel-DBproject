const controllersMYPagesBooksShow = async (req, res) => {
  res.render('my/books/show', { id: req.params.id })
}

export default controllersMYPagesBooksShow
