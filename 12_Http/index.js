const http=require('http')

let server=http.createServer((req,res)=>{
    res.end('Hello This is Yogesh')
})

server.listen(3006)


