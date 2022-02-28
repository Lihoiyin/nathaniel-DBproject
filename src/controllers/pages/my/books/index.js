const controllersPagesMyBooksIndex = async (req, res) => {
  res.render('my/books/index', { id: req.params.id })
}

export default controllersPagesMyBooksIndex
