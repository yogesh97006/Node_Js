const EventEmitter=require('events')

const event=new EventEmitter


event.on('Name',()=>{
  console.log('My Name is Yogesh')
})
event.on('Name',(name,age,lives)=>{
  console.log(`My Name is ${name} and My Age is ${age} and I stay at ${lives}`)
})
event.on('Name',()=>{
  console.log('My Name is Saini')
})
event.on('Name',(name,age,lives)=>{
  console.log(`My Name is ${name} and My Age is ${age} and I stay at ${lives}`)
})
event.on('Name',()=>{
  console.log('My Name is Gehlot')
})


event.emit('Name',"Yogesh Saini",22,"Hyderabad")

