let officeAccounts  = {
  // 初始化定义一个存储类型对象
  subscribes: {
    any: [],
  },
  // 添加订阅号
  subscribe: function (type = 'any', fn) {
    if (!this.subscribes[type]) {
      this.subscribes[type] = []
    }
    this.subscribes[type].push(fn) //将订阅方法存在数组中
  },
  // 退订
  unSubscribe: function (type = 'any', fn) {
    this.subscribes[type] = this.subscribes[type].filter((item) => {
      return item != fn // 将退订的方法从数组中移除
    })
  },
  // 发布订阅
  publish: function (type = 'any', ...args) {
    this.subscribes[type].forEach((item) => {
      item(...args) // 根据不同的类型调用相应的方法
    })
  },
}

let hawkins = {
  readArtcile: (info) => {
    console.log('hawkins收到:', info)
  },
}
let xiaoming = {
  readArtcile: (info) => {
    console.log('xiaoming收到:', info)
  },
}
officeAccounts.subscribe('成长制备', hawkins.readArtcile)
officeAccounts.subscribe('成长制备', xiaoming.readArtcile)
officeAccounts.subscribe('成长制备2', hawkins.readArtcile)
officeAccounts.subscribe('成长制备2', xiaoming.readArtcile)
officeAccounts.publish('成长制备', 'wefawegawerg')
officeAccounts.publish('成长制备', '4456456')