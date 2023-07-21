const fs=require('fs')
const http=require('http')

const server=http.createServer((req,res)=>{
    let rstream=fs.createReadStream('text.txt')
    rstream.on('data',(info)=>{
         console.log(info)
         res.write(info)
    })
    rstream.on('end',()=>{
        console.log('reading is over no more data to read')
        res.end()
    })
    rstream.on('error',(err)=>{
        console.log(err)
        res.end(err)
    })
}).listen(8000,'127.0.0.1')