console.log('a start')
exports.done = false
var b = require('./6.1.b.js')
console.log('in a, b.done=%j', b.done)
exports.done = true
console.log('a done')
