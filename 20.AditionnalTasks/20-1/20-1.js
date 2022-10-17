const mathTest = createMathTest(-100, +100)

function createMathTest(minNum = 0, maxNum = 10) {
	const num1 = getRandomNumberInRange(minNum, maxNum)
	const num2 = getRandomNumberInRange(minNum, maxNum)
	const symbol = getRandomNumberInRange(0, 4)
	if (symbol === 0) {
		res = num1 + num2
		sym = '+'
	} else if (symbol === 1) {
		res = num1 - num2
		sym = '-'
	} else if (symbol === 2) {
		res = num1 * num2
		sym = '*'
	} else if (symbol === 3) {
		res = (num1 / num2).toFixed(2)
		sym = '/'
	}
	let userResult = Number(prompt(`How much will be ${num1} ${sym} ${num2}?`))
	if (userResult === res) {
		alert(`${userResult} - this is the correct answer! Well done, keep up the good work!`)
	} else {
		alert(`${userResult} - this is not the right answer! Correct answer: ${res}`)
	}
	return {
		expression: `${num1} ${sym} ${num2}`,
		result: Number(res)
	}

}

function getRandomNumberInRange(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

console.log(mathTest)