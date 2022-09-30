function getRandomNumberInRange(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

function getWinner(applicants, winnerObject) {
	let numArray = Object.keys(applicants)
	let numWin = getRandomNumberInRange(0, numArray.length)
	return {
		...winnerObject,
		...applicants[numArray[numWin]]
	}
}


const todaysWinner = {
	prize: '10 000$',
}

const winnerApplicants = {
	'001': {
		name: 'Maxim',
		age: 25,
	},
	'201': {
		name: 'Svetlana',
		age: 20,
	},
	'304': {
		name: 'Catherine',
		age: 35,
	},
}
const resultWinner = getWinner(winnerApplicants, todaysWinner)
console.log('resultWinner', resultWinner)
// { prize: '10 000$', name: 'Catherine', age: 35 }