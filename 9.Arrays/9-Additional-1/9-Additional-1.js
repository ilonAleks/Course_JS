const getMathResult = function (expression) {
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