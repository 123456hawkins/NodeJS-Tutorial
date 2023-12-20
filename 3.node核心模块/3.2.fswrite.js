const fs = require('fs')
const path = require('path')
const filePath = path.join(__dirname, '2.js')
// 默认写入文件会先清空文件内容
// 文件不存在会创建该文件
fs.writeFile(filePath, '写入内容123', (err) => {
  if (err) {
    console.log(err)
  }
  console.log('success1')
  // 写入成功读取
  fs.readFile(filePath, 'utf-8', (err, data) => {
    console.log(data)
  })
})
// 通过{'flag':'a'}实现文件追加方式写入
fs.writeFile(filePath, '\n嘻哈万丰奥威', { flag: 'a' }, (err) => {
  if (err) {
    console.log(err)
  }
  console.log('success2')
  // 写入成功读取
  fs.readFile(filePath, 'utf-8', (err, data) => {
    console.log(data)
  })
})
