const coffees = ['Latte', 'Cappuccino', 'Americano']
const prices = [1.5, 1, 2]

const updatedPrices = prices.map((price) => price + 0.5)

let coffeeName = prompt('Search for coffee by name:')

newCoffees = coffees.join(', ')
	.toLowerCase()
	.split(', ')

coffeeName = coffeeName.trim()
	.toLowerCase()

let coffee = newCoffees.indexOf(coffeeName)

if (coffee !== -1) {
	alert(`Take your favorite coffee ${coffees[coffee]}. It is ${coffee + 1} in popularity in our coffee shop.`)
	alert(`Coffee ${coffees[coffee]} now stands ${updatedPrices[coffee]} euro`)
} else {
	alert('Unfortunately, this type of coffee is not available')
}