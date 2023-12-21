const fs = require('fs')
const path = require('path')
const filePath = path.join(__dirname, '2.path.js')
console.log(filePath)
// 异步读取文件
fs.readFile(filePath, 'utf-8', (err, data) => {
  console.log(data)
})
// 同步读取文件
const fileResult = fs.readFileSync(filePath, 'utf-8')
console.log(fileResult)
