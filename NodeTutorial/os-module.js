const os = require('os')
os.uptime

//info about current user 
const user = os.userInfo()
console.log(user)

/*{
  uid: -1,
  gid: -1,
  username: 'pc',
  homedir: 'C:\\Users\\pc',
  shell: null
}
*/

//method returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`)

/*The System Uptime is 77080 seconds */


const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
  }
  console.log(currentOS)

  /*{
  name: 'Windows_NT',
  release: '10.0.19044',
  totalMem: 4168548352,
  freeMem: 255967232
}*/