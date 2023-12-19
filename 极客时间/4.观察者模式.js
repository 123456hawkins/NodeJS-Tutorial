const EventEmitter = require('events').EventEmitter
class Geektime extends EventEmitter {
  constructor() {
    super()
    setInterval(() => {
      this.emit('newLesson', { price: Math.random() * 100 })//添加监听器
    }, 3000)
  }
}
const geektime = new Geektime()
geektime.addListener('newLesson', (res) => {
  console.log('课程价格:',res);
})
