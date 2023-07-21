const events=require('events')

// console.log(events)

const event=new events() // why  like a function

event.on('name',()=>{
    console.log('yogesh')
})

event.emit('name')

