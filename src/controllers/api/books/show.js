import fetch from 'node-fetch'

const controllersApiShowOne = async (req, res) => {
  const { bookId } = req.params

  const bookData = await fetch(
    `https://www.googleapis.com/books/v1/volumes/${bookId}`,
    { method: 'GET' }
  ).then((response) => response.json())
    .then((data) => data)

  return res.status(201).json(bookData)
}

export default controllersApiShowOne
