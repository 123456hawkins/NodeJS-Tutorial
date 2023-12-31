const http = require('http')
const fork = require('child_process').fork

const server = http.createServer((req, res) => {
  if (req.url === '/compute') {
    const compute = fork('./fork_compute.js')
    compute.send('开启一个新的子进程')

    // 当一个子进程使用process.send()会触发'message'事件
    compute.on('message', (sum) => {
      res.end(`Sum is ${sum}`)
      compute.kill()
    })

    // 子进程监听到错误消息退出
    compute.on('close', (code, singal) => {
      console.log(`收到close事件，子进程收到信号${singal}而终止，退出码${code}`)
      compute.kill()
    })
  } else {
    res.end('ok')
  }
})
server.listen(3000,()=>{
  console.log(`server listen on port 3000`);
})
