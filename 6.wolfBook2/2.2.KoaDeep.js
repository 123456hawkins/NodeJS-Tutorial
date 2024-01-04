const http = require('http')
const Koa = require('koa')
const app = new Koa()

//响应
app.use(async (ctx) => {
  ctx.body = 'Hello Koa 2'
})
const server = http.createServer(app.callback())
server.listen(3000)
