const fs = require('fs')
const faker = require('faker')
let base = +new Date(1988, 9, 3)
let oneDay = 24 * 3600 * 1000
let now
// 生成200条数据
const data = Array.from({ length: 20000 }, (_, index) => {
  const seconds = index.toString().padStart(2, '0')
  now = new Date((base += oneDay))
  return {
    timestamp: now,
    value: faker.random.number({ min: 1, max: 200000 }),
  }
})

// 将数据写入文件
const jsonData = JSON.stringify(data, null, 2)
fs.writeFileSync('generatedData3.json', jsonData)
