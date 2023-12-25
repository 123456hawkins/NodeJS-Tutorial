const amqp = require('amqplib')

async function product(params) {
  try {
    // 1. 创建链接对象
    const connection = await amqp.connect('amqp://localhost:5672')

    // 2. 获取通道
    const channel = await connection.createChannel()

    // 3. 声明参数
    const routingKey = 'productQueue'
    const msg = 'hello hawkins'

    // 声明队列
    await channel.assertQueue(routingKey, { durable: false })
    for (let i = 0; i < 1000; i++) {
      // 4. 发送消息
      await channel.publish('', routingKey, Buffer.from(`${msg} 第${i}条消息`))
    }

    // 5. 关闭通道
    await channel.close()
    // 6. 关闭连接
    await connection.close()
  } catch (error) {
    console.log(error)
  }
}
product()
