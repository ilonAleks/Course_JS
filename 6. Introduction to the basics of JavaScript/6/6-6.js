let clientName = prompt('Введите имя клиента')
let clientSpentToday = prompt('Сколько клиент потратил сегодня?')
let clientSpentForAllTime = prompt('Сколько клиент потратил за все время?')

clientName = clientName.trim()
clientSpentToday = clientSpentToday.trim()
clientSpentToday = Number(clientSpentToday)
clientSpentForAllTime = clientSpentForAllTime.trim()
clientSpentForAllTime = Number(clientSpentForAllTime)

let examClientSpentToday = typeof (clientSpentToday) === 'number' && clientSpentToday // num and !NaN
let examClientSpentForAllTime = typeof (clientSpentForAllTime) === 'number' && clientSpentForAllTime

if (examClientSpentToday && examClientSpentForAllTime) {
	let discount = 0
	if (clientSpentForAllTime >= 100 && clientSpentForAllTime < 300) {
		discount = 10
	} else if (clientSpentForAllTime >= 300 && clientSpentForAllTime < 500) {
		discount = 20
	} else if (clientSpentForAllTime >= 500) {
		discount = 30
	}

	alert(`You are given a discount in ${discount}%!`)

	clientSpentForAllTime += clientSpentToday - (clientSpentToday / 100 * discount)

	alert(`Thanks, ${clientName}! You will pay ${clientSpentToday - (clientSpentToday / 100 * discount)}$. 
For all the time in our restaurant you spent ${clientSpentForAllTime}$.`)
} else { alert('The amount that the client spent for all the time and which was spent today should be a number! Reload the page to repeat the attempt.') }