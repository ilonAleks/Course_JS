const goals = [8, 1, 1, 3, 2, -1, 5]

// task 1
const number1 = goals.indexOf(Math.max(...goals)) + 1
const numberOfGoals1 = Math.max(...goals)

alert(`The most productive match was number ${number1}.
It was clogged ${numberOfGoals1} goals.`)

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
alert(`The most non-effective matches were under numbers ${numbers}. In each of them it was clogged ${minNumberOfGoals} goals.`)

// task 3
let copyGoals3 = Array.from(goals) //copy array goals
let sortGoals3 = copyGoals3.sort((a, b) => a - b)
let shiftGoals3 = sortGoals3.shift()
let numberOfGoals3 = sortGoals3.reduce((sum, goal) => sum + goal)
alert(`The total number of goals per season is ${numberOfGoals3}`)

// task 4
if (goals.find((goal) => goal === -1)) {
	alert('There were automatic defeats: Yes')
} else {
	alert('There were automatic defeats: No')
}

// task 5
const copyGoals5 = Array.from(goals)
const sortGoals5 = copyGoals5.sort((a, b) => a - b)
const filterGoals5 = sortGoals5.filter(goal => goal > 0)
let numberOfGoals5 = sortGoals5.reduce((sum, goal) => (sum + goal))
numberOfGoals5 = Math.floor(numberOfGoals5 / goals.length)
alert(`The average number of goals per match is ${numberOfGoals5}`)

// task 6
let copyGoals6 = Array.from(goals)
let sortGoals6 = copyGoals6.sort((a, b) => a - b)
let filterGoals6 = sortGoals6.filter(goal => goal > 0)
alert(`${filterGoals6}`)
console.log(goals)
