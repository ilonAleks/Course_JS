let day = Number(prompt('Enter day'))
let month = Number(prompt('Enter month'))
let year = Number(prompt('Enter year'))
let countDays = Number(prompt('Enter the number of days you want to add'))

const dateEnter = [day, month - 1, year]
let dateEnterJS = new Date(dateEnter[2], dateEnter[1], dateEnter[0])

function addDays(date, days = 1) {
	days = days * 24 * 60 * 60 * 1000
	let dateInMs = date.getTime() + days
	return new Date(dateInMs)
}
console.log(addDays(dateEnterJS, countDays))

