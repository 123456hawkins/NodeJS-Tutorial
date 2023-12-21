const http = require('http')
const fs = require('fs')
const path = require('path')
const filePath = path.resolve(__dirname, '2.js')
const server = http.createServer((req, res) => {
  const method = req.method
  if (method === 'GET') {
    // let stream = fs.createReadStream(filePath)
    // stream.pipe(res)
    fs.readFile(filePath, (req, data) => {
      res.end(data)
    })
  }
})
server.listen(8000, () => {
  console.log('listen on 8000')
})
