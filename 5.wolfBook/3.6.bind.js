function test(arg) {
  console.log(this.variable + arg )
}
let obj = {
  variable: 1,
}
let c = test.bind(obj, 1)
c()

