// const array = ["100", "hello", "javascript", , "help200", "+", 4]
// const mathSimbol = ['>', '<', '=', '+', '-', '*', '/']

// if (array.length > 3) {
// 	let aR = []
// 	for (let i = 0; i < array.length; i++) {
// 		let toNum = Number(array[i])
// 		console.log(toNum)
// 		if (toNum !== NaN) {
// 			aR.push[toNum]
// 		}
// 		console.log(aR)
// 	}
// 	// console.log(array)
// }
let aR = []
function spliceArray() {
	const array = ["100", "hello", "javascript", , "help200", "+", 4]
	for (let i = 0; i < array.length; i++) {
		let toNum = Number(array[i])
	}
	if (toNum !== NaN) {
		aR.push(array)
	}
	console.log(aR)
}

spliceArray()