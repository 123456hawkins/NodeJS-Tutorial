const fs = require('fs')
const path = require('path')
const filePath1 = path.resolve(__dirname, '2.js')
const filePath2 = path.resolve(__dirname, 'copyFile.js')
fs.copyFile(filePath1, filePath2, (err) => {
  if (err) {
    console.log(err)
  }
  fs.readFile(filePath2, 'utf-8', (err, data) => {
    console.log(data)
  })
})
