const http = require('http')
const server=http.createServer((req,res)=>{
  // 这两个变量也是 stream 类型，前者是readable stream(可读流)，后者是writeable stream(可写流)，
  // 从字面意思上推测出前者是用来读取数据的，而后者是用来写入数据的

  res.writeHead(200,{
    'content-type':'text/plain'
  })
  res.end('hello Node JS!')
})
server.listen(3000,()=>{
  console.log('listen on port 3000');
})

setTimeout(() => {
  console.error(new Error('Whoops, something bad happened'));
  server.close(()=>{
    console.log('server close！');
  })
}, 3000);