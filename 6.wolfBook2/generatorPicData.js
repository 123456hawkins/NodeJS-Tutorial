const fs = require('fs')
const faker = require('faker')
let number = 1
// 生成200条数据
const data = Array.from({ length: 20000 }, (_, index) => {
  const seconds = index.toString().padStart(2, '0')
  // const timestamp = `2024-01-01T00:00:${seconds}:00`;
  // let timestamp = new Date().getTime()
  number += 1
  return {
    timestamp: number,
    value: faker.random.number({ min: 1, max: 200000 }),
  }
})

// 将数据写入文件
const jsonData = JSON.stringify(data, null, 2)
fs.writeFileSync('generatedData4.json', jsonData)
