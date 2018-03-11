const Sequelize = require('sequelize')
const os = require('os')
const path = require('path')

const sequelize = new Sequelize({
	dialect: 'sqlite',
	storage: path.join(os.homedir(), '.phonebook.db'),
	logging: false,
	operatorsAliases: false
})

const Contacts = sequelize.define('contacts', {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	name: {
		type: Sequelize.STRING,
		allowNull: false
	},
	phone: {
		type: Sequelize.STRING,
		allowNull: false
	}
})

exports.sequelize = sequelize
exports.Contacts = Contacts
