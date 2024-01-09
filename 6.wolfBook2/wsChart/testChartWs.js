const express = require('express')
const http = require('http')
const WebSocket = require('ws')
const timeSeriesData1 = require('./generatedData1.json')
const timeSeriesData2 = require('./generatedData2.json')
const timeSeriesData3 = require('./generatedData3.json')
const timeSeriesData4 = require('./generatedData4.json')

const app = express()
const server = http.createServer(app)
const wss = new WebSocket.Server({ server })

let id = 0
wss.on('connection', (ws) => {
  //随机分配id
  id++
  ws.id = id
  console.log('WS SERVER CONNECT!' + `CONNECT ID ##${ws.id}##`)
  if (ws.id % 4 == 0) {
    setInterval(() => {
      ws.send(JSON.stringify(timeSeriesData4.shift()))
    }, 1000)
  }
  if (ws.id % 4 == 1) {
    setInterval(() => {
      ws.send(JSON.stringify(timeSeriesData1.shift()))
    }, 1000)
  }
  if (ws.id % 4 == 2) {
    setInterval(() => {
      ws.send(JSON.stringify(timeSeriesData2.shift()))
    }, 1000)
  }
  if (ws.id % 4 == 3) {
    setInterval(() => {
      ws.send(JSON.stringify(timeSeriesData3.shift()))
    }, 1000)
  }

  ws.on('close', () => {
    console.log(`##${ws.id}## closed!`)
    ws.close()
  })
})

server.listen(3030, () => {
  console.log('listen on Port 3030')
})
