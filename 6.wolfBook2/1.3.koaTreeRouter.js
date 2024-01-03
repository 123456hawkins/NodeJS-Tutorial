const Koa = require('koa')
const Router = require('koa-trie-router')
let app = new Koa()
let router = new Router()

router
  .use((ctx, next) => {
    console.log('* request')
    return next()
  })
  .get((ctx, next) => {
    console.log('GET request')
    ctx.body = 'GET requests'
    return next()
  })
  .put('/foo', (ctx) => {
    ctx.body = 'put /foo requests'
  })
  .post('/bar', (ctx) => {
    ctx.body = 'POST /bar request'
  })
app.use(router.middleware())
app.listen(3000)
