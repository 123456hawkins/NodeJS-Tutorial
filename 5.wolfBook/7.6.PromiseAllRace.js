const startTime = process.hrtime()
let sleep = (time, info) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // console.log(info)
      resolve(info)
    }, time)
  })
}
let loser = sleep(1000, 'loser')
let winner = sleep(500, 'winner')
Promise.all([loser, winner]).then((val) => {
  console.log('等待所有promise执行完,他们是并行的', val)
  const endTime = process.hrtime(startTime)
  console.log(`Excute time:${endTime[0]}s ${endTime[1] / 1000000}ms`)
})
// Promise.race([loser, winner]).then((val) => {
//   console.log('等待所有promise执行完,他们是并行的\n', val)
//   const endTime = process.hrtime(startTime)
//   console.log(`Excute time: ${endTime[1] / 1000000}ms`)
// })
