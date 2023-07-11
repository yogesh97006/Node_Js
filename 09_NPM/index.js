let validator=require('validator')
let chalk=require('chalk')

console.log(chalk.blue.inverse('Hello world!'));

const log=console.log

log(chalk.bgGreen('yogesh'))
log(chalk.green.inverse('yogesh'))
log(chalk.bgWhite('yogesh'))
log(chalk.bgRedBright('yogesh'))

const check=validator.isEmail('yogesh@gmail.com')

log(check?chalk.bgGreen(check):chalk.bgRedBright(check))

