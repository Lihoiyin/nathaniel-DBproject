const controllersPagesResultsShow = async (req, res) => {
  res.render('books/results', { id: req.params.id })
}

export default controllersPagesResultsShow
