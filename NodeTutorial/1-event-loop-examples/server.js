const http = require('http')

const server = http.createServer((req, res) => {
  console.log('request event')
  res.end('Hello World')
})

server.listen(5000, () => {
  console.log('Server listening on port : 5000....')
})
//keep listenning 

//result 
//Server listening on port : 5000....
/* Since we refresh the link : 
request event
request event
request event
request even
*/ 