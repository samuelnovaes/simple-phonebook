const {question} = require('./input.js')
const add = require('./add.js')
const remove = require('./remove.js')
const update = require('./update.js')
const list = require('./list.js')
const menu = require('./menu.js')
const exit = require('./exit.js')
const chalk = require('chalk')

async function option(){
	console.log()

	let op = await question('> ')

	switch(op){
		case 'add':
			await add()
			await option()
			break
		case 'delete':
			await remove()
			await option()
			break
		case 'edit':
			await update()
			await option()
			break
		case 'list':
			await list()
			await option()
			break
		case 'menu':
			menu()
			await option()
			break
		case 'exit':
			await exit()
			break
		default:
			console.log(chalk.red('Invalid command!'))
			await option()
	}
}

module.exports = option
