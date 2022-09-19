// let clientName = prompt('Введите имя клиента')
let clientSpentToday = prompt('Сколько клиент потратил сегодня?')
let clientSpentForAllTime = prompt('Сколько клиент потратил за все время?')

console.log(clientSpentToday)
console.log(clientSpentForAllTime)

// clientName = clientName.trim()
clientSpentToday = clientSpentToday.trim()
clientSpentToday = Number(clientSpentToday)
clientSpentForAllTime = clientSpentForAllTime.trim()
clientSpentForAllTime = Number(clientSpentForAllTime)

console.log(typeof (clientSpentToday))
console.log(typeof (clientSpentForAllTime))

if (typeof (clientSpentToday) != Number) {
	alert('Сумма, которую клиент потратил за сегодня, должна быть числом! Перезагрузите страницу, чтобы повторить попытку.')
} else { alert('ok') }
// else if (typeof (clientSpentForAllTime) != Number) {
// 	alert('Сумма, которую клиент потратил за сегодня, должна быть числом! Перезагрузите страницу, чтобы повторить попытку.')
// }


// let discount = 0
// if (clientSpentForAllTime >= 100 && clientSpentForAllTime < 300) {
// 	discount = 10
// } else if (clientSpentForAllTime >= 300 && clientSpentForAllTime < 500) {
// 	discount = 20
// } else if (lientSpentForAllTime >= 500) {
// 	discount = 30
// }

// alert(`You are given a discount in ${discount}%!`)

// clientSpentForAllTime += clientSpentToday - (clientSpentToday / 100 * discount)

// alert(`Thanks, ${clientName}! You will pay ${clientSpentToday - (clientSpentToday / 100 * discount)}$. 
// For all the time in our restaurant you spent ${clientSpentForAllTime}$.`)