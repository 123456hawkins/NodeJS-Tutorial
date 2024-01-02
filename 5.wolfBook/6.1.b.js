console.log('b starting')
exports.done = false
var a = require('./6.1.a.js')
console.log('in b,a.done=%j', a.done)
exports.done = true
console.log('b done')
