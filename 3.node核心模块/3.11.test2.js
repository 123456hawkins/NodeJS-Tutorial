const fs = require('fs')
const path = require('path')
const filePath1 = path.resolve(__dirname, '2.js')
const filePaht2 = path.resolve(__dirname, 'copy.js')

// 打开源文件
fs.open(filePath1, 'r', (err, readFd) => {
  if (err) {
    console.log(err)
  } else {
    
    fs.open(filePaht2, 'w', (err, writeFd) => {
      let buf = Buffer.alloc(3)
      let readed = 0 //下次读取文件位置
      let writed = 0 //下次写入文件文职
      let size = 3
    })
    ;(function next() {
      // 读文件
      fs.read(readFd, buf, 0, size, readFd, (err, bytesRead) => {
        readed += bytesRead
        if (!bytesRead) {
          fs.close(readFd, (err) => console.log('关闭失败！'))
        }
        // 写文件
        fs.write(writeFd, buf, 0, bytesRead, writed, (err, bytesWritten) => {
          if (!bytesWritten) {
            fs.close(writeFd)
          }
          writed += bytesWritten
        })
      })
    })()
  }
})
