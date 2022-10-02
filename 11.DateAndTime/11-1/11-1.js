function getDateFormat(date, separator = '.') {
	let arrayDate = Object.values(date)
	const stringDate = arrayDate.join(', ')
	const dateJS = new Date(stringDate)

	let day = dateJS.getDate()
	if (day < 10) {
		day = '0' + day
	}
	let month = dateJS.getMonth() + 1
	if (month < 10) {
		month = '0' + month
	}
	let year = dateJS.getFullYear()
	return `"${day}${separator}${month}${separator}${year}"`
}

console.log(getDateFormat({
	year: 1989,
	month: 8,
	day: 22
}, '-'))

console.log(getDateFormat({
	year: 2001,
	month: 5,
	day: 5
},))


// const date = new Date()
// console.log(date)
// Sat Oct 01 2022 21:01:02 GMT+0300 (Москва, стандартное время)

// const newDate = new Date(2023, 7, 22)
// console.log(newDate)
// Thu Feb 10 2000 00:00:00 GMT+0300 (Москва, стандартное время)

// console.log(newDate.getFullYear()) // 2000
// console.log(newDate.getMonth()) // 1
// console.log(newDate.getDate()) // 10
// console.log(newDate.getDay()) // 4

// newDate.setHours(23)
// newDate.setMinutes(24)
// newDate.setSeconds(25)
// console.log(newDate)
// Thu Feb 10 2000 23:24:25 GMT+0300 (Москва, стандартное время)

// const date1 = new Date(2022, 4, 6)
// let date2 = Date.now()
// const diff = (date2 - date1.getTime()) / 1000 / 60 / 60 / 24 / 30
// console.log(diff)
// 4,9 month