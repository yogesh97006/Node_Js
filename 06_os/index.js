const os=require('os')

let bit=os.arch()
console.log(bit)

let freespace=os.freemem()
console.log(freespace)
console.log(freespace/1024)
console.log(freespace/1024/1024)

let ramspace=os.totalmem()
console.log(ramspace/1024/1024)

let pf=os.platform()
console.log(pf)

let hn=os.hostname()
console.log(hn)

let temp=os.tmpdir()
console.log(temp)