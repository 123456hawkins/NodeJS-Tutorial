const http = require('http')
const { forOwn } = require('lodash')

// 全局捕获,不推荐使用
process.on('uncaughtException', (err) => {
  console.log(err)
})
// 同步代码
const server = http.createServer((req, res) => {
  try {
    if ((req.url = '/hawkins')) {
      throw new Error('我是一个错误')
    }
    res.end('服务器正常')
  } catch (error) {
    console.log(error)
    res.end('服务器异常')
  }
})

// promise代码
const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'content-type': 'text/plain',
  })
  new Promise(() => {
    throw new Error('我是一个错误')
  }).catch((err) => {
    console.log(err)
    res.end('服务器异常')
  })
})

// async/await代码
const server = http.createServer(async (req, res) => {
  try {
    await foo()
  } catch (error) {
    console.log(error)
    res.end('服务器异常')
  }
})
server.listen(3000, () => {
  console.log('服务器开始运行')
})
