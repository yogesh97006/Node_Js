const os=require('os')


console.log(os.arch())
// it gives how many bits of your system contains

console.log(os.freemem()/1024/1024/1024)
// it will show how much free space is there in ram

console.log(os.totalmem()/1024/1024/1024)
// it will tell how much is total space of ram

console.log(os.platform())
// it will tell on what operating system it is working

console.log(os.release())

console.log(os.hostname())

console.log(os.homedir())

console.log(os.tmpdir())

console.log(os.type())

console.log(os.userInfo())

console.log(os.cpus())

console.log(os.networkInterfaces())




