const http = require('http')
const os = require('os')
const server = http.createServer()
server.listen(3000, () => {
  process.title = '测试进程进程进程进程'
  console.log(
    '进程id',
    process.pid,
    '\n父进程:',
    process.ppid,
    '\n工作目录:',
    process.cwd()
  )
  console.log(os.cpus())
})
