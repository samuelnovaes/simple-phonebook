#!/usr/bin/env node

const {sequelize} = require('./sequelize.js')
const menu = require('./menu.js')
const option = require('./option.js')
const chalk = require('chalk')

sequelize.sync()
.then(() => {
	menu()
	option()
})
.catch(err => {
	console.log(chalk.red(`Error: ${err.message}`))
})
