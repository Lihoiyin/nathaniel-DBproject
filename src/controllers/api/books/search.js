import fetch from 'node-fetch'

const controllersApiSearch = async (req, res) => {
  const title = 'programming'
  const author = ''
  const category = ''

  const url = `https://www.googleapis.com/books/v1/volumes?q=${title}+subject:${category}+inauthor:${author}&printType=books&maxResults=40&key=AIzaSyB5noX_cJTwroPi1fLZ_qyJtI94Ah6qWKU`
  const booksData = await fetch(
    url,
    { method: 'GET' }
  )
    .then((response) => response.json())
    .then((data) => data)

  return res.status(201).json(booksData)
}

export default controllersApiSearch
