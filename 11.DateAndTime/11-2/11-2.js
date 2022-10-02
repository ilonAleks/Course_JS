let dayB = prompt('Enter your birthday day')
let monthB = prompt('Enter your birthday month')
let nextYear = prompt('Enter the next year when you celebrate your birthday')
const nextDayB = [dayB, monthB - 1, nextYear]
alert(`There are ${getDaysBeforeBirthday(nextDayB)} days left until your next birthday`)

function getDaysBeforeBirthday(nextBirthdayDate) {
	let date = new Date(nextBirthdayDate[2], nextBirthdayDate[1], nextBirthdayDate[0])
	let daysBeforeBirthday = date.getTime() - Date.now()
	return convertMsToDays(daysBeforeBirthday)

}

function convertMsToDays(daysBeforeBirthday) {
	return Math.round(daysBeforeBirthday / 1000 / 60 / 60 / 24)
}