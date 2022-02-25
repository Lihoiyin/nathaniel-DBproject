const controllersPagesResultsShow = async (req, res) => {
  res.render('my/books/results', { id: req.params.id })
}

export default controllersPagesResultsShow
