function getSumOfNumbers(number, type = 'odd') {
	let sum = 0
	if (type === 'odd') {
		for (let i = 1; i <= number; i += 2) {
			sum += i
		}
	} else if (type === 'even') {
		for (let i = 2; i <= number; i += 2) {
			sum += i
		}
	} else {//all numbers
		for (let i = 0; i <= number; i++) {
			sum += i
		}
	}
	return sum
}

console.log(getSumOfNumbers(10, ''))