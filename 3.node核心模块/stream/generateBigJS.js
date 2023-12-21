const fs = require('fs');
const crypto = require('crypto');

// 生成随机字符的函数
const generateRandomString = (size) => {
  return crypto.randomBytes(size).toString('hex');
};

// 生成 100MB 大小的文件
const generateRandomFile = (filePath, fileSizeInBytes) => {
  const fileSizeInBytesPerChunk = 1024 * 1024; // 1MB per chunk
  const chunks = Math.ceil(fileSizeInBytes / fileSizeInBytesPerChunk);
  const randomString = generateRandomString(fileSizeInBytesPerChunk);

  const writeStream = fs.createWriteStream(filePath);

  for (let i = 0; i < chunks; i++) {
    writeStream.write(randomString);
  }

  writeStream.end();

  writeStream.on('finish', () => {
    console.log(`Random file generated successfully at ${filePath}`);
  });

  writeStream.on('error', (err) => {
    console.error(`Error generating random file: ${err}`);
  });
};

// 生成文件
const filePath = 'randomFile.js';
const fileSizeInBytes = 100 * 1024 * 1024; // 100MB
generateRandomFile(filePath, fileSizeInBytes);
