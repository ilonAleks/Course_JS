const matrix = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
]

const glueMatrixToArray = matrix.reduce((total, amount) => {
	return total.concat(amount)
}, [])

console.log(glueMatrixToArray)