const {Contacts} = require('./sequelize.js')
const {question} = require('./input.js')
const {Op} = require('sequelize')
const validator = require('validator')
const chalk = require('chalk')

async function remove(){
	let id = await question('ID: ')
	if(validator.isEmpty(id) || !validator.isInt(id, {min: 1})) return console.log(chalk.red('Invalid ID!'))

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
