// function getWinner(applicants, winnerObject) {
// 	let num = Object.keys(applicants)//делаем массив из ключей (номеров билетов)
// 	let arr = []
// 	for (i = 0; i < num.length; i++) {//перебор по массиву билетов
// 		let numNum = Number(num[i])//делвем номера билетов числами
// 		arr.push(numNum)//добавляем их в новый массив
// 	}
// 	let rand = Math.floor(Math.random() * arr.length)//берем случайный ключ массива чисел номеров билетов
// 	let randomNumberInRange = arr[rand]//выводим номер случайного билета
// 	console.log(randomNumberInRange)

// 	for (let j in applicants) {
// 		// console.log(j)
// 		// console.log(applicants[j])
// 		let abc = applicants[j]
// 		// console.log(abc)
// 		if (j == randomNumberInRange) {
// 			let winner = {
// 				...winnerObject,
// 				...abc
// 			}
// 		}

// 	}
// 	return winner
// 	// console.log(`${Object.keys(winnerObject)}: '${Object.values(winnerObject)}', `)
// }

function getRandomNumberInRange(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}
function getWinner(applicants, winnerObject) {
	let participants = Object.keys(applicants)
	let winner = getRandomNumberInRange(0, participants.length)

	return  {
			...winnerObject,
			...winnerApplicants[participants[winner]]
	}
}


const todaysWinner = {
	prize: '10 000$',
}

const winnerApplicants = {
	'001': {
		name: 'Максим',
		age: 25,
	},
	'201': {
		name: 'Светлана',
		age: 20,
	},
	'304': {
		name: 'Екатерина',
		age: 35,
	},
}
const resultWinner = getWinner(winnerApplicants, todaysWinner)
console.log('resultWinner', resultWinner)
// { 
// prize: '10 000$', 
// name: 'Максим', age: 25 
// }