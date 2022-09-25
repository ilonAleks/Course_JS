let coffeeName = prompt('Search for coffee by name:')

const coffees = ['Latte', 'Cappuccino', 'Americano']
newCoffees = coffees.join(', ')
	.toLowerCase()
	.split(', ')

coffeeName = coffeeName.trim()
	.toLowerCase()

let coffee = newCoffees.indexOf(coffeeName)

if (coffee !== -1) {
	alert(`Take your favorite coffee ${coffees[coffee]}. It is ${coffee + 1} in popularity in our coffee shop.`)
} else {
	alert('Unfortunately, this type of coffee is not available')
}