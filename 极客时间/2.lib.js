console.log('hawkins!')

exports.hello = { msg: 'hello' } //export会默认挂载一个变量
exports.say = () => {
  console.log('hahahah')
}
setTimeout(() => {
  console.log(exports)
}, 200)
