'use strict'
const test = require('ava')

const add = (a, b) => {
  return a + b
}
test('simple test', (t) => {
  t.is(add(1, 2), 3)
})
