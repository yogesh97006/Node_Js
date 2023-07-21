const Info={
    Name:'Yogesh',
    Age:22,
    Lives:'Hyderabad',
    Role:'Frontend-Developer'
}

// console.log(Info)

const ObjToJson=JSON.stringify(Info)
// console.log(ObjToJson)

const fs=require('fs')
// fs.writeFile('json.json',ObjToJson,(err)=>{
//     console.log('is it working')
// })

fs.readFile('json.json','utf-8',(err,data)=>{
    console.log(data)
    const JsonToObj=JSON.parse(data)
    console.log(JsonToObj)
})


