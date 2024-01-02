// 单线程会死吗？
const fs = require('fs')
const Koa = require('koa')
const app = new Koa()

app.use((ctx) => {
  if (ctx.path == '/good') {
    ctx.body = 'good good good'
  }

  fs.readFile('test.txt', (err, data) => {
    if (err) {
      throw err
    }
    console.log(data)
    ctx.body = 'hello koa'
  })
})
process.on('uncaughtException', (err) => {
  console.log(err)
})
app.listen(3000, () => {
  console.log('listen on port 3000')
})
