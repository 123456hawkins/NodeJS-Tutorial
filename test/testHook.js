const test = require('ava')
test.before(() => {
  console.log('beforeHook')
})
test.after(() => {
  console.log('afterHook')
})
test('test1', (t) => {
  t.is(2, 2)
})
