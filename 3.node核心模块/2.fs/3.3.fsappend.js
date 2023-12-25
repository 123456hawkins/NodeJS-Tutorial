const fs = require('fs')
const path = require('path')
const filePath = path.join(__dirname, '2.js')
fs.appendFile(filePath, 'appendFile', (err) => {
  if (err) {
    console.log(err)
  }
  console.log('success')
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      console.log(err)
    }
    console.log(data);
  })
})
