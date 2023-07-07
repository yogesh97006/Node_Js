const fs=require('fs')

fs.writeFileSync('write.txt','Hii I am Learning Node-Js')

// fs.writeFileSync('write.txt','Hii')

fs.appendFileSync('write.txt','\nToday i am learning in-build node modules')

let read_buff=fs.readFileSync('write.txt')
let read_text=read_buff.toString()
console.log(read_text)


fs.renameSync('write.txt','writeread.txt')

