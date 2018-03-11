const table = require('./table.js')
const chalk = require('chalk')

function menu(){
	console.log(table([
		[chalk.bold.underline('Command'), chalk.bold.underline('Action')],
		['add', 'Add contact'],
		['delete', 'Delete contact'],
		['edit', 'Edit contact'],
		['list', 'List contacts'],
		['menu', 'Show menu'],
		['exit', 'Exit'],
		['Ctrl + L', 'Clear screen']
	]))
}

module.exports = menu
