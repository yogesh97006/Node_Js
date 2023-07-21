let fs=require('fs')
let http=require('http')


let server=http.createServer()

server.on('request',(req,res)=>{

    let rstrem=fs.createReadStream('data.txt')
    rstrem.pipe(res)

})

server.listen(8000,'127.0.0.1',()=>{

})