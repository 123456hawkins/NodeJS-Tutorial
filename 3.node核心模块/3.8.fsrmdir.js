const fs = require('fs')

fs.rmdir('./dir', (err) => {
  if (err) return
  console.log('删除目录成功')
})
