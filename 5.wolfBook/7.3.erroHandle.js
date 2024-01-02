const http = require('http')
http
  .get('http://google.com', (res) => {
    const statusCode = res.statusCode
    const contentType = res.headers['content-type']

    let error
    if (statusCode !== 200) {
      error = new Error('Request Filed!\n' + `Status Code:${statusCode}`)
    } else if (!/^application\/json/.test(contentType)) {
      error = new Error(
        'Invalid content-type\n' +
          `Expected application/json but received ${contentType}`
      )
    }
    //常规回调
    if (error) {
      console.log(error.message)
      // 释放response占用的内存
      res.resume()
      return
    }
    res.setEncoding('utf-8')
    let rawData = ''
    res.on('data', (chunk) => {
      rawData += chunk
    })
    res.on('end', () => {
      try {
        let parsedData = JSON.parse(rawData)
        console.log(parsedData)
      } catch (e) {
        console.log(e)
      }
    })
  })
  .on('error', (e) => {
    console.log(`Got error:${e.message}`)
  })
