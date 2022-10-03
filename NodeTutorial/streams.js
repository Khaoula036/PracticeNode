const { createReadStream } = require('fs')

// The size of the buffer is by default 64kb
// last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream('./content/big.txt', { highWaterMark: 90000 })  //90000 nbr buffer
// const stream = createReadStream('../content/big.txt', { encoding: 'utf8' })

const stream = createReadStream('./content/big.txt')

 

stream.on('data', (result) => {
  console.log(result)
})
stream.on('error', (err) => console.log(err))

/*Result : 
<Buffer 68 65 6c 6c 6f 20 77 6f 72 6c 64 20 30 0a 68 65 6c 6c 
6f 20 77 6f 72 6c 64 20 31 0a 68 65 6c 6c 6f 20 77 6f 72 6c 64 20 32 0a 68 65 6c 6c 6f 20 77 6f ... 65486 more bytes>       
<Buffer 77 6f 72 6c 64 20 33 39 32 30 0a 68 65 6c 6c 6f 20 77 
6f 72 6c 64 20 33 39 32 31 0a 68 65 6c 6c 6f 20 77 6f 72 6c 64 20 33 39 32 32 0a 68 65 6c 6c 6f ... 65486 more bytes>       
<Buffer 6f 72 6c 64 20 37 37 37 35 0a 68 65 6c 6c 6f 20 77 6f 
72 6c 64 20 37 37 37 36 0a 68 65 6c 6c 6f 20 77 6f 72 6c 64 20 37 37 37 37 0a 68 65 6c 6c 6f 20 ... 37768 more bytes> 
*/


/*  const stream = createReadStream('./content/big.txt', { 
    highWaterMark: 90000,
    encoding: 'utf8',
 }) 

 result : .... hello world 9997
hello world 9998
hello world 9999
*/