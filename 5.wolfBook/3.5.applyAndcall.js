// const test = (arg) => {
//   //箭头函数没有自己的this
//   console.log(this.variable + arg)
// }
function test(arg,arg2) {
  console.log(this.variable + arg+arg2)
}
let obj = {
  variable: 123,
}
test()
test.apply(obj, [2,3])
test.call(obj, 2,3)
