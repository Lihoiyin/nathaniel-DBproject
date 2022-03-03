import fetch from 'node-fetch'

const controllersApiSearch = async (req, res) => {
  let { q1, q2, q3 } = req.params
  console.log(req.params)
  if (q1 === 'notFound') {
    q1 = ''
  }
  if (q2 === 'notFound') {
    q2 = ''
  }
  if (q3 === 'notFound') {
    q3 = ''
  }

  const url = `https://www.googleapis.com/books/v1/volumes?q=${q1}+subject:${q3}+inauthor:${q2}&printType=books&maxResults=40&key=AIzaSyB5noX_cJTwroPi1fLZ_qyJtI94Ah6qWKU`
  const booksData = await fetch(
    url,
    { method: 'GET' }
  )
    .then((response) => response.json())
    .then((data) => data)

  return res.status(201).json(booksData)
}

export default controllersApiSearch
