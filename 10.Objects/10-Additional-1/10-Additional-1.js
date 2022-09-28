const groceries = {
	"Orange Juice": {
		price: 1.5,
		discount: 10,
	},
	"Chocolate": {
		price: 2,
		discount: 0,
	},
	// more items...
}
let groceriesArray = Object.entries(groceries)
console.log(groceriesArray)
// [
// ['Orange Juice', {price: 1.5, discount: 10}]
// ['Chocolate', {price: 2, discount: 0}]
// ]

function getTotalPriceOfShoppingBag(shoppingBag) {
	const result = []
	console.log(groceries.length)
	for (let i = 0; i < shoppingBag.length; i++) {
		for (let j = 0; j < groceriesArray.length; j++) {
			for (let k = 0; k < groceriesArray[j].length; j++) {
				if (shoppingBag[i].product === groceriesArray[j][k]) {
					result.push({
						product: groceriesArray[j][k]
					})
				}
			}
		}
		// return
	}



	const shoppingBag = [
		{ product: 'Chocolate', quantity: 3 },
		{ product: 'Orange Juice', quantity: 23 },
	]

	const totalPrice = getTotalPriceOfShoppingBag(shoppingBag);
	console.log('totalPrice', totalPrice); // Возвращает 37.05