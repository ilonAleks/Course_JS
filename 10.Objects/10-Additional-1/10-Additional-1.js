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

function getTotalPriceOfShoppingBag(shoppingBag) {
	return shoppingBag.reduce((acc, prod) => {
		return acc + Number(((groceries[`${prod.product}`].price -
			(groceries[`${prod.product}`].price * groceries[`${prod.product}`].discount / 100)) *
			prod.quantity).toFixed(2))
	}, 0)
}

const totalPrice = getTotalPriceOfShoppingBag(shoppingBag)
console.log('totalPrice', totalPrice)
// Returns 37.05