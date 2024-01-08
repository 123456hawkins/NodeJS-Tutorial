const express = require('express')
const http = require('http')
const WebSocket = require('ws')
const data1 = require('./generatedData1.json')
const data2 = require('./generatedData2.json')
const data3 = require('./generatedData3.json')
const data4 = require('./generatedData4.json')
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
      ws.send(JSON.stringify(data4.pop()))
    }, 1000)
  }
  if (ws.id % 4 == 1) {
    setInterval(() => {
      ws.send(JSON.stringify(data1.pop()))
    }, 1000)
  }
  if (ws.id % 4 == 2) {
    setInterval(() => {
      ws.send(JSON.stringify(data2.pop()))
    }, 1000)
  }
  if (ws.id % 4 == 3) {
    setInterval(() => {
      ws.send(JSON.stringify(data3.pop()))
    }, 1000)
  }

  ws.on('close', () => {
    console.log(`##${ws.id}## closed!`)
    ws.close()
  })
})

// setInterval(() => {
//   wss.clients.forEach((client) => {
//     if (client.readyState === WebSocket.OPEN) {
//       client.send(JSON.stringify(data.pop()))
//     }
//   })
// }, 1000)
server.listen(3000, () => {
  console.log('listen on Port 3000')
})
