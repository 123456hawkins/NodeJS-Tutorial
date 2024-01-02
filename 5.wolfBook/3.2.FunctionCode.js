const { result } = require('lodash')

const map = (fn) => (array) => array.map(fn)
const prop = (key) => (object) => object[key]
const reduce = (fn, inital) => (array) => array.reduce(fn, inital) //高阶函数，用于将数组中的元素累积到一个值中
const add = (x, y) => x + y
const sum = reduce(add, 0)
const filter = (fn) => (array) => array.filter(fn)

const average = (items) => {
  items.length === 0 ? 0 : sum(items) / items.length
}

const flow =
  (...fns) =>
  (x) => {
    fns.reduce((result, fn) => fn(result), x)
  }

const calcAvgCost = (items, filterFn = () => true) => {
  flow(filter(filterFn), map(prop('price')), average)(items)
}
