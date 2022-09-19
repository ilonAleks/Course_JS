const quetion1 = 'Сколько будет 2 + 2?'
const rightAnswer1 = 4

const quetion2 = 'Сколько будет 2 * 2?'
const rightAnswer2 = 4

const quetion3 = 'У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?'
const rightAnswer3 = 1

const quetion4 = 'У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?'
const rightAnswer4 = 12

const quetion5 = 'Сколько будет 2 + 2 * 2?'
const rightAnswer5 = 6

let correctAnswers = 0
let incorrectAnswers = 0

let answer1 = prompt(quetion1)
answer1 = answer1.trim()
answer1 = Number(answer1)
if (answer1 == rightAnswer1) {
	alert("That's right! 2+2=4")
	correctAnswers += 1
} else {
	alert("That answer isn't right! 2+2=4")
	incorrectAnswers += 1
}

let answer2 = prompt(quetion2)
answer2 = answer2.trim()
answer2 = Number(answer2)
if (answer2 == rightAnswer2) {
	alert("That's right! 2*2=4")
	correctAnswers += 1
} else {
	alert("That answer isn't right! 2*2=4")
	incorrectAnswers += 1
}

let answer3 = prompt(quetion3)
answer3 = answer3.trim()
answer3 = Number(answer3)
if (answer3 == rightAnswer3) {
	alert("That's right! 5-3-1=1")
	correctAnswers += 1
} else {
	alert("That answer isn't right! 5-3-1=1")
	incorrectAnswers += 1
}

let answer4 = prompt(quetion4)
answer4 = answer4.trim()
answer4 = Number(answer4)
if (answer4 == rightAnswer4) {
	alert("That's right! 10-2-1+5=12")
	correctAnswers += 1
} else {
	alert("That answer isn't right! 10-2-1+5=12")
	incorrectAnswers += 1
}

let answer5 = prompt(quetion5)
answer5 = answer5.trim()
answer5 = Number(answer5)
if (answer5 == rightAnswer5) {
	alert("That's right! (2*2)+2=6")
	correctAnswers += 1
} else {
	alert("That answer isn't right! (2*2)+2=6")
	incorrectAnswers += 1
}

alert(`The end of the test! Correct answers - ${correctAnswers}; Incorrect answers - ${incorrectAnswers}.`)