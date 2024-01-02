const http = require('http')
const fs = require('fs')

const app = http.createServer((req, res) => {
  if (req.url === '/remote') {
    res.writeHead(200, { 'content-Type': 'text/plain' })
    return res.end('hello remote Page\n')
  } else if (req.url === '/failure') {
    res.writeHead(200, { 'content-Type': 'text/plain' })
    return res.end('caonima')
  } else {
    proxy(req, res)
  }
})

const proxy = (req, res) => {
  let options = {
    host: req.host,
    port: 3000,
    headers: req.headers,
    path: '/remote',
    agent: false,
    method: 'GET',
  }
  let httpProxy = http.request(options, (response) => {
    response.pipe(res)
  })
  req.pipe(httpProxy)
}
app.listen(3000, () => {
  const PORT = app.address().port
  console.log('Server runing at port localhost:3000')
})
