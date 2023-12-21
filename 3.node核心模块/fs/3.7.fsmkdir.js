const fs = require('fs')
fs.mkdir('./dir',(err)=>{
  if (err) return
  console.log('创建目录成功')
})