const readline = require('readline')
const chalk = require('chalk')

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

function question(message){
	return new Promise((resolve, reject) => {
		rl.question(chalk.bold(message), answer => {
			resolve(answer)
		})
	})
}

exports.rl = rl
exports.question = question
