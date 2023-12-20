const fs = require('fs')
const path = require('path')
const filePath1 = path.resolve(__dirname, '2.js')
const filePath2 = path.resolve(__dirname, 'copy.js')
fs.readFile(filePath1, 'utf-8', (err, data) => {
  if (err) {
    console.log(err)
  } else {
    fs.copyFile(filePath1, filePath2, (err) => {
      if (err) {
        console.log(err)
      } else {
        fs.readFile(filePath2, 'utf-8', (err, data) => {
          if (err) {
            console.log(err)
          } else {
            console.log(data)
          }
        })
      }
    })
  }
})
