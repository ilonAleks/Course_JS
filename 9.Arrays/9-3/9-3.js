numbers = [10, 4, 100, -5, 54, 2]

// for
function returnSumArrayWithFor() {
	let sum = 0

	for (let i = 0; i < numbers.length; i++) {
		let cube = numbers[i] ** 3
		sum += cube
	}
	return sum
}
console.log(returnSumArrayWithFor()) // 1158411

//for of
function returnSumArrayWithForOf() {
	let sum = 0

	for (let numb of numbers) {
		let cube = numb ** 3
		sum += cube
	}
	return sum
}
console.log(returnSumArrayWithForOf()) // 1158411

//forEach
function returnSumArrayWithForeach() {
	let sum = 0
	numbers.forEach(numb => {
		let cube = numb ** 3
		sum += cube
	})
	return sum
}
console.log(returnSumArrayWithForeach()) // 1158411

//reduce
function returnSumArrayWithReduce() {
	let sum = numbers.reduce((total, amount) => {
		return total + amount ** 3
	}, 0)
	return sum
}
console.log(returnSumArrayWithReduce()) // 1158411
