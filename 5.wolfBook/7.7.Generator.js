function* doSomething() {
  console.log('1')
  yield 2
  yield 3
}
let gen1 = doSomething()
console.log(gen1.next());
console.log(gen1.next());
console.log(gen1.next());

