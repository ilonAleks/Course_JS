const goals = [8, 1, 1, 3, 2, -1, 5]

// task 1
const number1 = goals.indexOf(Math.max(...goals)) + 1
const numberOfGoals1 = Math.max(...goals)

alert(`Самый результативный матч был под номером ${number1}. 
В нем было забито ${numberOfGoals1} гол(ов).`)

// task 2
const copyGoals2 = Array.from(goals)
const sortGoals2 = copyGoals2.sort((a, b) => a - b)
const filterGoals2 = sortGoals2.filter(goal => goal > 0)
const minNumberOfGoals = filterGoals2[filterGoals2.length - filterGoals2.length]
let numbers = []
for (let i = 0; i < goals.length; i++) {
	if (goals[i] === minNumberOfGoals) {
		numbers.push(i + 1)
	}
}
alert(`Самые не результативные матчи были под номерами ${numbers}. В каждом из них было забито по ${minNumberOfGoals} мячу(а).`)


// task 3
let copyGoals3 = Array.from(goals) //copy array goals
let sortGoals3 = copyGoals3.sort((a, b) => a - b)
let shiftGoals3 = sortGoals3.shift()
let numberOfGoals3 = sortGoals3.reduce((sum, goal) => sum + goal)
alert(`Общее количество голов за сезон равно ${numberOfGoals3}`)

// task 4
if (goals.find((goal) => goal === -1)) {
	alert('Были автоматические поражения: да')
} else {
	alert('Были автоматические поражения: нет')
}

// task 5
const copyGoals5 = Array.from(goals)
const sortGoals5 = copyGoals5.sort((a, b) => a - b)
const filterGoals5 = sortGoals5.filter(goal => goal > 0)
let numberOfGoals5 = sortGoals5.reduce((sum, goal) => (sum + goal))
numberOfGoals5 = Math.floor(numberOfGoals5 / goals.length)
alert(`Среднее количество голов за матч равно ${numberOfGoals5}`)

// task 6
let copyGoals6 = Array.from(goals)
let sortGoals6 = copyGoals6.sort((a, b) => a - b)
let filterGoals6 = sortGoals6.filter(goal => goal > 0)
alert(`${filterGoals6}`)
console.log(goals)
