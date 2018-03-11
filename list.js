const {Contacts} = require('./sequelize.js')
const table = require('./table.js')
const chalk = require('chalk')

async function list(){
	try {
		let contacts = await Contacts.findAll()
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
