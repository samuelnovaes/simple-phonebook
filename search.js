const {Contacts} = require('./sequelize.js')
const {question} = require('./input.js')
const {Op} = require('sequelize')
const table = require('./table.js')
const chalk = require('chalk')

async function list(){
	let name = await question('Name: ')
	try {
		let contacts = await Contacts.findAll({
			where: {
				name: {
					[Op.like]: `%${name}%`
				}
			}
		})
		let tableContacts = [[chalk.bold.underline('ID'), chalk.bold.underline('Name'), chalk.bold.underline('Phone')]]
		for(let contact of contacts){
			tableContacts.push([contact.id, contact.name, contact.phone])
		}
		console.log(table(tableContacts))
	}
	catch(err){
		console.log(chalk.red(`Error: ${err.message}`))
	}
}

module.exports = list
