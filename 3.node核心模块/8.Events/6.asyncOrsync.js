const EventEmitter = require('events')
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter()
myEmitter.on('event', function() {
  console.log('listener1')
})
myEmitter.on('event', async function() {
  console.log('listener2')
  setTimeout(() => {
    console.log('我是异步中的输出')
    resolve(1)
  }, 1000)
})
myEmitter.on('event', function() {
  console.log('listener3')
})
myEmitter.emit('event')
console.log('end')
