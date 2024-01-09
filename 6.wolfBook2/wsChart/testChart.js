const express = require('express')
const cors = require('cors')

const WebSocket = require('ws')
const app = express()

app.use(
  cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    headers: ['Content-Type'],
  })
)

const wss = new WebSocket.Server({ port: 443 })

const jsonData1 = require('./generatedData1.json')
const jsonData2 = require('./generatedData2.json')
const jsonData3 = require('./generatedData3.json')
const jsonData4 = require('./generatedData4.json')

// 设置 CORS 头

const port = 3000

// 示例时间序列数据
let timeSeriesData1 = jsonData1
let timeSeriesData2 = jsonData2
let timeSeriesData3 = jsonData3
let timeSeriesData4 = jsonData4

// 设置一个API端点，用于查询时间序列的某一点
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

//请求一半数据接口
app.get('/api/half1', (req, res) => {
  let halfData = timeSeriesData1.splice(0, 600)
  res.json(halfData)
})
app.get('/api/half2', (req, res) => {
  let halfData = timeSeriesData2.splice(0, 600)
  res.json(halfData)
})
app.get('/api/half3', (req, res) => {
  let halfData = timeSeriesData3.splice(0, 600)
  res.json(halfData)
})
app.get('/api/half4', (req, res) => {
  let halfData = timeSeriesData4.splice(0, 600)
  res.json(halfData)
})
//数据直接弹出，不用查询
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

wss.on('connection', (ws) => {
  //随机分配id

  setInterval(() => {
    let d1 = timeSeriesData1.shift()
    let d2 = timeSeriesData2.shift()
    let d3 = timeSeriesData3.shift()
    let d4 = timeSeriesData4.shift()
    ws.send(
      JSON.stringify({
        data1: d1,
        data2: d2,
        data3: d3,
        data4: d4,
      })
    )
  }, 1000)

  ws.on('close', () => {
    console.log(`client closed!`)
    ws.close()
  })

  ws.onerror = function () {
    console.log('websocket error')
  }
})

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
})
