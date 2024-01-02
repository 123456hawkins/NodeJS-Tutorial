const fs = require('fs')
const path = '.'
fs.readdir(path, (err, files) => {
  files.forEach((file) => {
    if (/^koa/.test(file)) {
      console.log('1=' + file)
    }
  })
})

fs.readdir(path, (err, files) => {
  files.forEach((file) => {
    if (/^koa/.test(file)) {
      console.log('2=' + files)
    }
  })
})
