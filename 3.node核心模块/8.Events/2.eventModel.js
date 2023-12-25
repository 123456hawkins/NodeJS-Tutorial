const EvenEmitter = () => {
  // 保存订阅方法
  this._events = {}
}

// 默认设计最大监听数
EvenEmitter.defaultMaxListeners = 10

module.exports = EvenEmitter
