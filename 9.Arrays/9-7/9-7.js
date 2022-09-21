const goals = [8, 1, 1, 3, 2, -1, 5]

//? task 1
const number1 = goals.indexOf(Math.max(...goals)) + 1
const numberOfGoals1 = Math.max(...goals)

alert(`Самый результативный матч был под номером ${number1}. 
В нем было забито ${numberOfGoals1} гол(ов).`)

//! task 2
// const numbers = goals.findIndex((goal) => goal === 1)
// console.log(numbers)

// for (let i = 0; i < goals.length; i++) {
// 	let num = 0
// 	if (num = goals.findIndex((goal) => goal >= 1 && goal <= 3)) {
// 		goals[num] = ''
// 	}
// 	console.log(num)
// let numbers = num.indexOf[-1]
// console.log(numbers)
// }

// const numbers = goals.reduce((goal, index) => {
// 	goal[index] = (goal[index] || 0) + 1
// 	return goal
// }, [])
// console.log(numbers[1])

// const goals2 = goals.forEach((goal) => {
// 	// return goal
// 	console.log(goal)
// })
// console.log(goals2)

// let str = goals.join()
// console.log(str)
// if (str >= 0 && str <= 2) {
// const numbers2 = goals.indexOf()

// 	console.log(numbers2)
// }
// const numberOfGoals2 =

// alert(`Самые не результативные матчи были под номерами ${numbers}. 
// В каждом из них было забито по numberOfGoals мячу(а).`)

//! task 3
// const goals = [8, 1, 1, 3, 2, -1, 5]
// let numberOfGoals = goals.forEach((goal) => {
// 	if (goal > 0) {
// 		return goal += goal
// 	}
// })

// const indexLuser3 = goals.findIndex((goal) => goal === -1)
// // console.log(indexLuser3)
// goals[indexLuser3] = ''
// let sum = 0
// console.log(goals)
// for (let i = 0; i < goals.length; i++) {
// 	sum += goals[i]
// }
// console.log(sum)
// alert(`Общее количество голов за сезон равно ${numberOfGoals}`)

//? task 4
if (goals.find((goal) => goal === -1)) {
	alert('Были автоматические поражения: да')
} else {
	alert('Были автоматические поражения: нет')
}

//! task 5
// const indexLuser = goals.findIndex((goal) => goal === -1)
// console.log(indexLuser)
// goals[indexLuser] = ''
// console.log(goals)

// task 6
const indexLuser = goals.findIndex((goal) => goal === -1)
goals[indexLuser] = ''
let sortGoals = goals.sort((a, b) => a - b)
console.log(sortGoals)
let str = sortGoals.join(', ')
alert(`${str}`)