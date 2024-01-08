const express = require('express')
const cors = require('cors')
const { createServer } = require('http')
const { Server } = require('socket.io')
const http = require('http')

const jsonData1 = require('./generatedData1.json')
const jsonData2 = require('./generatedData2.json')
const jsonData3 = require('./generatedData3.json')
const jsonData4 = require('./generatedData4.json')

const app = express()

// 设置 CORS 头
app.use(
  cors({
    origin: '*',
    methods: ['GET'],
    headers: ['Content-Type'],
  })
)
const port = 3000
const httpServer = createServer(app)
const io = new Server(httpServer, {
  cors: {
    origin: 'http://localhost:8888/',
  },
})

io.on('connection', (socket) => {
  console.log('ws已连接')
})

// 示例时间序列数据
let timeSeriesData1 = jsonData1
let timeSeriesData2 = jsonData2
let timeSeriesData3 = jsonData3
let timeSeriesData4 = jsonData4

// 设置一个API端点，用于返回时间序列的某一点
app.get('/api/timeSeries1/:timestamp', (req, res) => {
  const requestedTimestamp = req.params.timestamp
  console.log(requestedTimestamp)
  // 在实际应用中，你可能需要根据请求的时间戳查找对应的数据点
  const requestedDataPoint = timeSeriesData1.find(
    (point) => point.timestamp == requestedTimestamp
  )

  if (requestedDataPoint) {
    res.json(requestedDataPoint)
  } else {
    res.status(404).json({ error: 'Data point not found' })
  }
})

app.get('/api/timeSeries2/:timestamp', (req, res) => {
  const requestedTimestamp = req.params.timestamp
  console.log(requestedTimestamp)
  // 在实际应用中，你可能需要根据请求的时间戳查找对应的数据点
  const requestedDataPoint = timeSeriesData2.find(
    (point) => point.timestamp == requestedTimestamp
  )

  if (requestedDataPoint) {
    res.json(requestedDataPoint)
  } else {
    res.status(404).json({ error: 'Data point not found' })
  }
})

app.get('/api/timeSeries3/:timestamp', (req, res) => {
  const requestedTimestamp = req.params.timestamp
  console.log(requestedTimestamp)
  // 在实际应用中，你可能需要根据请求的时间戳查找对应的数据点
  const requestedDataPoint = timeSeriesData3.find(
    (point) => point.timestamp == requestedTimestamp
  )

  if (requestedDataPoint) {
    res.json(requestedDataPoint)
  } else {
    res.status(404).json({ error: 'Data point not found' })
  }
})

app.get('/api/timeSeries4/:timestamp', (req, res) => {
  const requestedTimestamp = req.params.timestamp
  console.log(requestedTimestamp)
  // 在实际应用中，你可能需要根据请求的时间戳查找对应的数据点
  const requestedDataPoint = timeSeriesData4.find(
    (point) => point.timestamp == requestedTimestamp
  )
  if (requestedDataPoint) {
    res.json(requestedDataPoint)
  } else {
    res.status(404).json({ error: 'Data point not found' })
  }
})

app.get('/api/half1', (req, res) => {
  let halfData = timeSeriesData1.slice(0, 1000)
  res.json(halfData)
})
app.get('/api/half2', (req, res) => {
  let halfData = timeSeriesData2.slice(0, 1000)
  res.json(halfData)
})
app.get('/api/half3', (req, res) => {
  let halfData = timeSeriesData3.slice(0, 1000)
  res.json(halfData)
})
app.get('/api/half4', (req, res) => {
  let halfData = timeSeriesData4.slice(0, 1000)
  res.json(halfData)
})

app.get('/api/pop1', (req, res) => {
  if (timeSeriesData1.length !== 0) {
    res.json(timeSeriesData1.pop())
  } else {
    res.status(404).json({ error: 'Data point not found' })
  }
})
app.get('/api/pop2', (req, res) => {
  if (timeSeriesData2.length !== 0) {
    res.json(timeSeriesData2.pop())
  } else {
    res.status(404).json({ error: 'Data point not found' })
  }
})
app.get('/api/pop3', (req, res) => {
  if (timeSeriesData3.length !== 0) {
    res.json(timeSeriesData3.pop())
  } else {
    res.status(404).json({ error: 'Data point not found' })
  }
})
app.get('/api/pop4', (req, res) => {
  if (timeSeriesData4.length !== 0) {
    res.json(timeSeriesData4.pop())
  } else {
    res.status(404).json({ error: 'Data point not found' })
  }
})

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
})
