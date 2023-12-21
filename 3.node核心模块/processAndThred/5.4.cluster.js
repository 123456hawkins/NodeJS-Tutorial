const http = require('http')
const numCPUS = require('os').cpus().length
const cluster = require('cluster')
if (cluster.isMaster) {
  console.log('Master process pid is', process.pid)
  for (let i = 0; i < numCPUS; i++) {
    cluster.fork()
  }
  cluster.on('exit', (worker, code, signal) => {
    console.log('worker process died,id:', worker.process.pid)
  })
} else {
  http
    .createServer((req, res) => {
      res.writeHead(200)
      res.end('helloworld')
    })
    .listen(8000)
}
