const express = require('express')
const httpProxy = require('express-http-proxy')
const app = express()

const userServiceProxy = httpProxy('https://user-service')

// 身份认证
app.use((req, res, next) => {
  next()
})

app.get('/users/:userId', (req, res, next) => {
  userServiceProxy(req, res, next)
})
