const fs=require('fs')
const http=require('http')

const server=http.createServer()

server.on('request',(req,res)=>{
  const rstream=fs.createReadStream('val.txt','utf-8')
  rstream.on('data',(cdata)=>{
    console.log(cdata)
    res.write(cdata)
    res.end()
  })
  rstream.on('end',()=>{
    res.end()
    console.log('no more data to read')
  })
  rstream.on('error',(err)=>{
    console.log(err)
    res.end('this is having an error')
  })
})

server.listen(8000,'127.0.1.0',()=>{

})