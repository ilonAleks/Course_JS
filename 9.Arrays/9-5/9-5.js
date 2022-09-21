const coffees = ['Latte', 'Cappuccino', 'Americano']
const prices = [1.5, 1, 2]

const updatedPrices = prices.map((price) => price + 0.5)

let coffeeName = prompt('Поиск кофе по названию:')

newCoffees = coffees.join(', ')
	.toLowerCase()
	.split(', ')

coffeeName = coffeeName.trim()
	.toLowerCase()

let coffee = newCoffees.indexOf(coffeeName)

if (coffee !== -1) {
	alert(`Держите ваш любимый кофе ${coffees[coffee]}. Он ${coffee + 1}-й по популярности в нашей кофейне.`)
	alert(`Кофе ${coffees[coffee]} сейчас стоит ${updatedPrices[coffee]} евро`)
} else {
	alert('К сожалению, такого вида кофе нет в наличии')
}