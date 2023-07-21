const fs=require('fs')
const http=require('http')

let server=http.createServer((req,res)=>{
    let rstream=fs.createReadStream('text.txt')
    rstream.pipe(res)
}).listen(8000,'127.0.0.1')