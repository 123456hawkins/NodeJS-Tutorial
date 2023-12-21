process.stdin.on('data',(chunk)=>{
  console.log('stream by stdin',chunk);
  console.log('stream by stdin',chunk.toString());
})