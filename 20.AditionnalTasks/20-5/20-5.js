const date = prompt('Enter the date in the format "dd.mm.yyyy"').trim()
const event = prompt('Enter the name of this event').trim()

const body = document.body
const text = document.createElement('h1')
body.append(text)

function getTimeToDate() {
	setInterval(() => {
		const dateArray = date.split('.')
		let data = new Date(dateArray[2], dateArray[1] - 1, dateArray[0])
		let daysBeforeEvent = data.getTime() - Date.now()

		let days = Math.floor(daysBeforeEvent / 1000 / 60 / 60 / 24)
		let hours = Math.floor((daysBeforeEvent - Math.floor(days) * 1000 * 60 * 60 * 24) / 1000 / 60 / 60)
		let min = Math.floor((daysBeforeEvent - Math.floor(days) * 1000 * 60 * 60 * 24 - Math.floor(hours) * 1000 * 60 * 60) / 1000 / 60)
		let sec = Math.floor((daysBeforeEvent - Math.floor(days) * 1000 * 60 * 60 * 24 - Math.floor(hours) * 1000 * 60 * 60 - Math.floor(min) * 1000 * 60) / 1000)

		text.innerHTML = `Remaining until the event: ${event}<br> Days: ${days}, hours: ${hours}, minutes: ${min}, seconds: ${sec}`
	}, 1000)
}
getTimeToDate()