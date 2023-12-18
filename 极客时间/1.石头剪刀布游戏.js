var playerAction = process.argv[process.argv.length - 1] //读取命令行参数
var random = Math.random() * 3
if (random < 1) {
  var computerAction = 'rock'
} else if (random > 2) {
  var computerAction = 'scissor'
} else {
  var computerAction = 'paper'
}

if (computerAction == playerAction) {
  console.log('平局')
} else if (
  (computerAction === 'rock' && playerAction === 'paper') ||
  (computerAction === 'scissor' && playerAction === 'rock') ||
  (computerAction === 'paper' && playerAction === 'scissor')
) {
  console.log('玩家赢')
} else {
  console.log('电脑赢')
}
