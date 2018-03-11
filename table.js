const {table} = require('table')

function tabl(arr){
	return table(arr, {
		border: {
			topBody: '─',
			topJoin: '┬',
			topLeft: '┌',
			topRight: '┐',
			bottomBody: '─',
			bottomJoin: '┴',
			bottomLeft: '└',
			bottomRight: '┘',
			bodyLeft: '│',
			bodyRight: '│',
			bodyJoin: '│',
			joinBody: '─',
			joinLeft: '├',
			joinRight: '┤',
			joinJoin: '┼'
		}
	})
}

module.exports = tabl
