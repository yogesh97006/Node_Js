const chalk=require('chalk')
const validator=require('validator')


let log=console.log

const res=validator.isEmail('yogesh@gmail.com')
log(res?chalk.bgGreen(res):chalk.bgRed(res))
