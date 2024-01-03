import supertest from 'supertest'
import koa from 'koa'

const app = koa.callback()

test.cb('GET', (t) => {
  supertest(app)
})
