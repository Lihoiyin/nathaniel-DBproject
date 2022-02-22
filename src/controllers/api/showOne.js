import fetch from 'node-fetch'

const controllersApiShowOne = async (req, res) => {
  const testing = 'B1QPAQAAMAAJ'
  const url = `https://www.googleapis.com/books/v1/volumes/${testing}`
  const bookData = await fetch(
    url,
    { method: 'GET' }
  ).then((response) => response.json())
    .then((data) => data)

  return res.status(201).json(bookData)
}

export default controllersApiShowOne
