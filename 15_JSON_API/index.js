const fs=require('fs')
const http=require('http')



const server=http.createServer((req,res)=>{
    if(req.url=='/'){
        res.end('This is Home Page')
    }
    else if(req.url=='/About'){
        res.end('This is About Page')
    }
    else if(req.url=='/Contact'){
        res.end('This is Contact Page')
    }
    else if(req.url=='/Api'){
        fs.readFile('./Data.json','utf-8',(err,data)=>{
            const GotData=JSON.parse(data)
            res.writeHead(200,{"Content-Type":'application/json'})
            res.end(GotData)
        }) 
    }
    else if(req.url=='/Project'){
    res.end('This is Home Page')
}
else{
    res.writeHead(404,{"Content-Type":"text/html"})
    res.end('404 The is does not exists')
}
})

server.listen(8080,'localhost',()=>{
    console.log('this is server is hosted on http://localhost:8080')
})