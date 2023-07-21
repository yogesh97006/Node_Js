let info={
 Name:'Yogesh',
 age:22,
 lives:'Hyderbad',
 Graduated:true
}

console.log(info)

let json=JSON.stringify(info)

console.log(json)

let obj=JSON.parse(json)

console.log(obj)