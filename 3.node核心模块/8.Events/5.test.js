const events = require('events')
let emitter = new events.EventEmitter()
emitter.on('someevent', (args1, args2) => {
  console.log('listener:', args1, args2)
})
emitter.on('someevent', (args1, args2) => {
  console.log('listener2:', args1, args2)
})
emitter.emit('someevent','caonima','hhahahah')
