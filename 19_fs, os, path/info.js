const info=(name,age,lives)=>{
    console.log(`Your Name is ${name} and your age is ${age} and you live in ${lives}`)
}

const work=(passion)=>{
  return passion+' let see you can make it or not'
}


// info('Yogesh',22,'Hyderbad')

// work('software')
// console.log(work('software'))

// module.exports.info=info
// module.exports.work=work

module.exports={info,work}