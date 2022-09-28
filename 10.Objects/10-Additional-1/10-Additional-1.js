function getTotalPriceOfShoppingBag(shoppingBag) {

	return
}

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

const shoppingBag = [
	{ product: 'Chocolate', quantity: 3 },
	{ product: 'Orange Juice', quantity: 23 },
]

const totalPrice = getTotalPriceOfShoppingBag(shoppingBag);
console.log('totalPrice', totalPrice); // Возвращает 37.05