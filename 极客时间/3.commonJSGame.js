var playerAction = process.argv[process.argv.length - 1] //读取命令行参数
const game = require('./3.commonJSLib')
console.log(playerAction)
// game(playerAction)

process.stdin.on('data', (e) => {
  const playerAction = e.toString().trim()
  const result = game(playerAction)
  console.log(result)
})
