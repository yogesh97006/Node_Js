const http=require('http')

const server=http.createServer((req,res)=>{
    // console.log(req.url)
    if(req.url=='/'){
        res.end('Welcome ')
    }
    else if(req.url=='/about'){
        res.end('Welcome to about page')
    }
    else if(req.url=='/contact'){
        res.end('Welcome to contact page')
    }
    else if(req.url=='/projects'){
        res.end('Welcome to projects page ')
    }
    else{
        res.writeHead(404,{'Content-Type':'text/html'})
        res.end('the page does not exits 404 ')
    }
    
})

server.listen(21000,'localhost',()=>{
    console.log('lets see it works or not http://localhost:21000')
})