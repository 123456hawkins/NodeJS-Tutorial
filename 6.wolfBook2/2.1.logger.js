const Koa = require('koa')
const ipMiddleware = require('koa-ip')
const app = new Koa()

// 使用 koa-ip 中间件
app.use(ipMiddleware({ proxy: true }))

// 日志中间件
app.use((ctx, next) => {
  const start = new Date()
  const IP = ctx.request.ip
  return next().then(() => {
    const ms = new Date() - start
    console.log(`${IP}--${ctx.method}--${ctx.url}--${ms / 1000}ms`)
  })
})
app.use((ctx, next) => {
  if (ctx.url === '/foo') {
    ctx.body = 'foo'
  } else if (ctx.url === '/bar') {
    ctx.body = 'bar'
  } else {
    ctx.body = '404'
  }
})
app.listen(3000, () => {
  console.log('listen on port 3000')
})
