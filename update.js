const {Contacts} = require('./sequelize.js')
const {question} = require('./input.js')
const {Op} = require('sequelize')
const validator = require('validator')
const chalk = require('chalk')

async function update(){
	let contact = {}

	console.log(chalk.yellow('To keep the value, let the field blank'))

	let id = await question('ID: ')
	let name = await question('Name: ')
	let phone = await question('Phone: ')
	if(!validator.isEmpty(phone) && !validator.isMobilePhone(phone, 'any')) return console.log(chalk.red('Invalid phone number!'))

	if(name) contact.name = name
	if(phone) contact.phone = phone

	try {
		await Contacts.update(contact, {
			where: {
				id: {
					[Op.eq]: id
				}
			}
		})
		console.log(chalk.green('OK'))
	}
	catch(err){
		console.log(chalk.red(`Error: ${err.message}`))
	}
}

module.exports = update
