const {sequelize} = require('./sequelize.js')
const {rl} = require('./input')

function exit(){
	rl.close()
	sequelize.close()
}

module.exports = exit
