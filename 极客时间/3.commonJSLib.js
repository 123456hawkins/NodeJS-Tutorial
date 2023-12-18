module.exports = (playerAction) => {
  if (playerAction === '') {
    console.log('没出东西')
  } else {
    var random = Math.random() * 3
    if (random < 1) {
      var computerAction = 'rock'
    } else if (random > 2) {
      var computerAction = 'scissor'
    } else {
      var computerAction = 'paper'
    }
    console.log('电脑出了：' + computerAction)
    if (computerAction == playerAction) {
      console.log('平局')
      return 0
    } else if (
      (computerAction === 'rock' && playerAction === 'paper') ||
      (computerAction === 'scissor' && playerAction === 'rock') ||
      (computerAction === 'paper' && playerAction === 'scissor')
    ) {
      console.log('玩家赢')
      return -1
    } else {
      console.log('电脑赢')
      return 1
    }
  }
}
