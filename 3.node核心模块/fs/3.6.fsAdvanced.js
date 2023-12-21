const fs = require('fs')
const path = require('path')
const filePath = path.resolve(__dirname, '2.js')
let buf = Buffer.alloc(6) //创建6字节的缓冲对象
fs.open(filePath, 'r', '0666', (err, fd) => {
  if (err) {
    console.log(err)
  }
  console.log(fd) //返回的第二个参数为一个整数，表示打开文件返回的文件描述符，window中又称文件句柄

  // read
  fs.read(fd, buf, 0, 3, 0, (err, bytesRead, buffer) => {
    console.log(bytesRead)
    console.log(buffer.toString())
    fs.read(fd, buf, 3, 3, 3, (err, bytesRead, buffer) => {
      console.log(bytesRead)
      console.log(buffer)
      console.log(buffer.toString())
      fs.close(fd, (err) => {
        if (err) {
          console.log('关闭失败')
        } else {
          console.log('关闭成功')
        }
      })
    })
  })
})
