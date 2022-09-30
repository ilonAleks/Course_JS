const student = {
	fullName: 'Maxim',
	experienceInMonths: 12,
	stack: ['HTML', 'CSS', 'JavaScript', 'React'],
}

function giveJobToStudent(student, jobName) {
	let updatedStudent = Object.assign({}, student)
	updatedStudent.job = jobName
	return alert(`Congratulations! Student ${updatedStudent.fullName} has a new job! Now he ${updatedStudent.job}`)
}

const updatedStudent = giveJobToStudent(student, 'Web developer');
