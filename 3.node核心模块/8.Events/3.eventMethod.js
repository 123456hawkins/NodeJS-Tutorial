const EvenEmitter = require('./2.eventModel')
EvenEmitter.prototype.addListener = (type, listener) => {
  return _addListener(this, type, listener, false)
}
EvenEmitter.prototype.on = EvenEmitter.prototype.addListener = (
  type,
  listener,
  flag
) => {
  if (!this._events) {
    this._events = Object.create(null)
  }
  if (this._events[type]) {
    if (flag) {
      // 头部插入
      this._events[type].unshift(listener)
    } else {
      this._events[type].push(listener)
    }
  } else {
    this._events[type] = [listener]
  }
  if (type !== 'newListener') {
    this.emit('newListener', type)
  }
}
// emit方法
EvenEmitter.prototype.emit = (type, ...args) => {
  if (this._events[type]) {
    this._events[type].forEach((fn) => fn.call(this, ...args))
  }
}
// once方法
EvenEmitter.prototype.once = (type, listener) => {
  let _this = this
  // 中间函数，在调用完后立马删除
  const only = () => {
    listener()
    _this.removeListener(type, only)
  }
  // origin保存回调的引用，用于remove判断
  only.origin = listener
  this.on(type, only)
}
// off方法
EvenEmitter.prototype.off = EvenEmitter.prototype.removeListener = (
  type,
  listener
) => {
  if (this._events[type]) {
    // 过滤掉退订的方法，从数组中删除
    this._events[type] = this._events[type].filter((fn) => {
      return fn !== listener && fn.origin !== listener
    })
  }
}
// prependListener方法
EvenEmitter.prototype.prependListener = (type, listener) => {
  this.on(type, listener, true)
}

module.exports = EvenEmitter
