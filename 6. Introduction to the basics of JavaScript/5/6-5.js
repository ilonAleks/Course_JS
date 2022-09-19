const clientName = 'Igor'
let clientSpentForAllTime = 110

let clientSpentToday = 25

let discount = 0
if (clientSpentForAllTime >= 100 && clientSpentForAllTime < 300) {
	discount = 10
} else if (clientSpentForAllTime >= 300 && clientSpentForAllTime < 500) {
	discount = 20
} else if (lientSpentForAllTime >= 500) {
	discount = 30
}

alert(`You are given a discount in ${discount}%!`)

clientSpentForAllTime += clientSpentToday - (clientSpentToday / 100 * discount)

alert(`Thanks, ${clientName}! You will pay ${clientSpentToday - (clientSpentToday / 100 * discount)}$. 
For all the time in our restaurant you spent ${clientSpentForAllTime}$.`)