const {Contacts} = require('./sequelize.js')
const {question} = require('./input.js')
const validator = require('validator')
const chalk = require('chalk')

async function add(){
	let name = await question('Name: ')
	if(validator.isEmpty(name)) return console.log(chalk.red('Name is required!'))
	let phone = await question('Phone: ')
	if(!validator.isMobilePhone(phone, 'any')) return console.log(chalk.red('Invalid phone number!'))

	try {
		await Contacts.create({name, phone})
		console.log(chalk.green('OK'))
	}
	catch(err){
		console.log(chalk.red(`Error: ${err.message}`))
	}
}

module.exports = add
