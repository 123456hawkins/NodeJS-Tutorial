console.log('nodeStart')
const interval = setInterval(() => {
  console.log('setInterval')
}, 0)
setTimeout(() => {
  console.log('setTimeout 1')
  Promise.resolve()
    .then(() => {
      console.log('promise3')
    })
    .then(() => {
      console.log('promise4')
    })
    .then(() => {
      setTimeout(() => {
        console.log('setTimeout 2')
        Promise.resolve()
          .then(() => {
            console.log('promise5')
          })
          .then(() => {
            console.log('promise6')
          })
          .then(() => {
            clearInterval(interval)
          })
      }, 0)
    })
}, 0)
Promise.resolve()
  .then(() => {
    console.log('promise 1')
  })
  .then(() => {
    console.log('promise 2')
  })
