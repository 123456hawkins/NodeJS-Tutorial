const EventEmitter = require('events')
const observe = new EventEmitter()
observe.on('topic', () => {
  console.log('topic has occured')
})
const main = () => {
  console.log('start')
  observe.emit('topic')
  console.log('end')
}
main()
