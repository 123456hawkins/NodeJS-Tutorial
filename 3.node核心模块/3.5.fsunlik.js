const path=require('path')
const fs=require('fs')
const filePath=path.resolve(__dirname,'copyFile.js')
fs.unlink(filePath,(err)=>{
  if (err) {
    console.log('删除失败！');
  }
})