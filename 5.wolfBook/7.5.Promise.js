const hello = (i) => {
  if (i % 2 === 0) {
    return Promise.resolve(i)
  } else {
    return Promise.reject(new Error('double error'))
  }
}
hello(1)
  .then((val) => {
    console.log(val)
  })
  .catch((err) => {
    console.log(err)
  })
