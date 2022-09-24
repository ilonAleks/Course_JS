//! const array = ["100", "hello", "javascript", , "help200", "+", 4]
//! let toNum = Number(array[4])
//! console.log(toNum)
//! console.log(typeof (toNum))

const getMathResult = function (expression) {

	// const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
	// 	'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
	// if (expression.length > 3) {
	// 	for (let i = 0; i < expression.length; i++) {
	// 		let el = expression[i]
	// 		// console.log(el)
	// 		if (el.search(letters) || el === empty) {
	// 			let exp = expression.splice([i], 1)
	// 		}
	// 		console.log(expression)
	// 	}
	// 	console.log(expression)
	// }


	// 	if (expression.length > 3) {
	// 		for (let i = 0; i < expression.length; i++) {
	// 			let toNum = Number(expression[i])
	// 			if (typeof (toNum) === number || toNum === undefined) {
	// 				return expression.splice([i], 1)
	// 			}
	// 			console.log(expression)
	// 		}
	// 	}
	// 	console.log(expression)
	// }


	const mathSimbol = ['>', '<', '=', '+', '-', '*', '/']
	let firstElement = Number(expression[0])
	let secondElement = Number(expression[2])
	let result

	if (expression.length == 3 && mathSimbol.includes(expression[1])) {
		if (expression[1] === mathSimbol[0]) {// >
			result = firstElement > secondElement
		}
		if (expression[1] === mathSimbol[1]) {// <
			result = firstElement < secondElement
		}
		if (expression[1] === mathSimbol[2]) {// =
			result = firstElement == secondElement
		}
		if (expression[1] === mathSimbol[3]) {// +
			result = firstElement + secondElement
		}
		if (expression[1] === mathSimbol[4]) {// -
			result = firstElement - secondElement
		}
		if (expression[1] === mathSimbol[5]) {// *
			result = firstElement * secondElement
		}
		if (expression[1] === mathSimbol[6]) {// /
			result = firstElement / secondElement
		}
	} else {
		result = 'Error'
	}
	return result

}

console.log(getMathResult(["200", "+", 300])) // 500
console.log(getMathResult(["20", "-", "5"])) // 15
console.log(getMathResult([100, "/", 100]))
console.log(getMathResult([2, "-", 2])) // 0
console.log(getMathResult(["5", ">", "10"])) // false
console.log(getMathResult(["5", "<", "10"])) // true
console.log(getMathResult(["1", "=", 1])) // true
console.log(getMathResult(["1", "**", 1])) // "Error"
console.log(getMathResult(["100", "hello", "javascript", , "help200", "+", 4]))