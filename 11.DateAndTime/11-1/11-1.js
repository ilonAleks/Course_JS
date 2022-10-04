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