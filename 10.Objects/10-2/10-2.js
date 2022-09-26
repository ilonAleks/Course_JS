const student = {
	fullName: 'Максим',
	experienceInMonths: 12,
	stack: ['HTML', 'CSS', 'JavaScript', 'React'],
}

function giveJobToStudent(student, jobName) {
	let updatedStudent = Object.assign({}, student)
	updatedStudent.job = jobName
	return alert(`Поздравляем! У студента ${updatedStudent.fullName} появилась новая работа! Теперь он ${updatedStudent.job}`)
}

const updatedStudent = giveJobToStudent(student, 'веб-разработчик');
