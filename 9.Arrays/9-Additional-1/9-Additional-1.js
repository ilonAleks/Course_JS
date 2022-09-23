// ["100", "hello", "javascript", , "help200", "+", 4]
const getMathResult = function (expression) {

	const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
		'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
	if (expression.length > 3) {
		for (let i = 0; i < expression.length; i++) {
			let el = expression[i]
			// console.log(el)
			if (el.search(letters) || el === empty) {
				let exp = expression.splice([i], 1)
			}
			console.log(expression)
		}
		console.log(expression)
	}
}

console.log(getMathResult(["100", "hello", "javascript", , "help200", "+", 4]))

