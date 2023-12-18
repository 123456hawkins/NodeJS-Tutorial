console.log('start test')
const lib = require('./2.lib')
console.log(lib)
console.log('end test')
lib.cao={
  msg:'12312'
}//lib的应用和lib内部exports的引用是同一个
