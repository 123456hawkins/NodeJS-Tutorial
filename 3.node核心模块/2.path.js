const path = require('path')
console.log(__dirname)
console.log(__filename)
console.log(process.cwd())
console.log(path.resolve('./')) 

console.log(path.normalize('/koala/Desktop//程序员成长指北//代码pra/..')) 
console.log(path.join('src','http.js','hawkins'));
console.log(path.parse('/hawkins/1.http.js'));
console.log(path.basename('/hawkins/1.http.js'));
console.log(path.resolve('/foo/bar', '/bar/faa', '..', 'a/../c')) 
console.log(path.relative('/data/orandea/test/aaa', '/data/orandea/impl/bbb')) 