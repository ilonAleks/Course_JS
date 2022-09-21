let coffeeName = prompt('Поиск кофе по названию:')

const coffees = ['Latte', 'Cappuccino', 'Americano']
newCoffees = coffees.join(', ')
	.toLowerCase()
	.split(', ')

coffeeName = coffeeName.trim()
	.toLowerCase()

let coffee = newCoffees.indexOf(coffeeName)

if (coffee !== -1) {
	alert(`Держите ваш любимый кофе ${coffees[coffee]}. Он ${coffee + 1}-й по популярности в нашей кофейне.`)
} else {
	alert('К сожалению, такого вида кофе нет в наличии')
}