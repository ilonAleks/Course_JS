function getSumOfSequence(number) {
	let array = []
	for (let i = 0; i <= number; i++) {
		array.push(i)
	}
	// console.log(array)
	return array[0] + array[number]
}

console.log(getSumOfSequence(9))
