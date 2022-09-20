function getDivisors(number = 1) {
	if (Number.isInteger(number) && number !== 0) {
		let count = 0
		for (let i = 1; i <= number; i++) {
			if (number % i === 0) {
				count += 1
			}
		} return count
	} else {
		alert('number must be a whole number and more than zero!')
	}
}

console.log(getDivisors(30))

// console.log(Number.isInteger(number)) //return boolean