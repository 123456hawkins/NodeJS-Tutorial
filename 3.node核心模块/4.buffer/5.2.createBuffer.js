// 创建了一个6字节buffer，经过了初始化
let buf1 = Buffer.alloc(6)
// 创建了一个6字节的buffer，未经过初始化
let buf2 = Buffer.allocUnsafe(6)

console.log(buf1)
console.log(buf2)

let buf3 = Buffer.from('hawkins', 'utf-8')
console.log(buf3, buf3.toString())

let buf4 = Buffer.from([1, 2, 3, 4, 5, 6, 7])
console.log(buf4)

let buf5 = Buffer.from('helloworld', 'utf-8')
let buf6 = Buffer.from(buf5)
console.log(buf5)
console.log(buf6)
console.log(buf5 === buf6)
buf5[1]=33
console.log(buf5)
console.log(buf6)
