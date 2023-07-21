const http=require('http')

const server=http.createServer((req,res)=>{
    if(req.url=='/'){
        res.end('This is Home Page')
    }
    else if(req.url=='/contact'){
        res.end('This is a Contact Page')
    }
    else{
        res.writeHead(404,{'Content-type':'type/html'})
        res.end('<h1>This is in Error</h1>')
    }
})

server.listen(8000,'127.0.0.1',()=>{
    console.log('this working on port ',8000)
})
