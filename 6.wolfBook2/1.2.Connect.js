const connect = require('connect')
const http = require('http')

const app = connect()

// 响应所有请求
app.use((req, res) => {
  if (req.url === '/test') {
    res.end('hello test')
  } else {
    res.end('Hello from connect')
  }
})

app.listen(3000, () => {
  console.log('listen on port 3000')
})
