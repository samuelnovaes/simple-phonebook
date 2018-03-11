const {Contacts} = require('./sequelize.js')
const {question} = require('./input.js')
const {Op} = require('sequelize')
const chalk = require('chalk')

async function remove(){
	let id = await question('ID: ')

	try {
		await Contacts.destroy({
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

module.exports = remove
