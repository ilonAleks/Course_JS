function getWinnerNumber() {
	let numbers = []
	for (let i = 1016; i <= 1937; i += 1) {
		numbers.push(i)
	}
	let array = []
	numbers.forEach(number => {
		if (number % 3 === 0
			&& number % 7 === 0
			&& number % 5 !== 0
			&& number % 2 !== 0) {
			return array.push(number)
		}
		return array
	})
	console.log(array[array.length - 1])
}
getWinnerNumber()
