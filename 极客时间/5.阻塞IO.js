const glob = require('glob')
var result = null
console.time('glob')
// result = glob.sync(__dirname + '/**/*')
glob(__dirname + '/**/*', function(err, res){
  result = res
})
console.timeEnd('glob')
console.log(result)
