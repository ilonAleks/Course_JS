function checkQuestionAnswer(question, correctAnswer) {
	let answer = prompt(question)
	answer = answer.trim()
	answer = answer.toLowerCase
	correctAnswer = correctAnswer.toLowerCase

	if (answer === correctAnswer) {
		alert('The answer is true')
	} else {
		alert('The answer is incorrect')
	}
	return answer
}

checkQuestionAnswer('Watermelon is a fruit or berry?', 'Berry')
checkQuestionAnswer('How many adults do an average of teeth?', '32')
checkQuestionAnswer('What is the smallest bird in the world?', 'Hummingbirds')