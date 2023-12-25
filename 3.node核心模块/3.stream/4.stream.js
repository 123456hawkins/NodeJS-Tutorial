const http = require('http')
const fs = require('fs')
const path = require('path')
const filePath = path.resolve(__dirname, '2.js')
const server = http.createServer((req, res) => {
  let stream = fs.createReadStream(filePath)
  stream.pipe(res)
})
server.listen(3000)
