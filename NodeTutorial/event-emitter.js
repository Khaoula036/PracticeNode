// get back the class
// if want custom extend from class
// otherwise just for emitting and handling events create instance

const EventEmitter = require('events')

const customEmitter = new EventEmitter()

// on and emit methods
// keep track of the order
// additional arguments

customEmitter.on('response', (name, id) => {
  console.log(`data recieved user ${name} with id:${id}`)
})

customEmitter.on('response', () => {
  console.log('some other logic here')
})

customEmitter.emit('response', 'john', 34)

/* Result 
data recieved user john with id:34
some other logic here */

/* We should respect the order of on & emit 
First : listen (on) 
Then  : emit (emit)
Example :

const EventEmitter = require('events')

const customEmitter = new EventEmitter()


customEmitter.on('response', () => {
    console.log('data received')
})

customEmitter.emit('response')

customEmitter.on('response', () => {
  console.log('some other logic here')
})

//result : data received 

*/

/*Example 1:
const EventEmitter = require('events')

const customEmitter = new EventEmitter()


// on and emit methods
// keep track of the order

customEmitter.on('response', () => {
    console.log('data received')
})

customEmitter.emit('response')
//result : data received 

*/
