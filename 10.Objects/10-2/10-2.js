const student = {
	fullName: 'Maxim',
	experienceInMonths: 12,
	stack: ['HTML', 'CSS', 'JavaScript', 'React'],
}
const updatedStudent = giveJobToStudent(student, 'Web developer');

//1 metod
// function giveJobToStudent(student, jobName) {
// 	let updatedStudent = Object.assign({}, student)
// 	updatedStudent.job = jobName
// 	return alert(`Congratulations! Student ${updatedStudent.fullName} has a new job! Now he ${updatedStudent.job}`)
// }


//2 metod

function giveJobToStudent(student, jobName) {
	let newStudent = {
		...student,
		job: jobName
	}
	return alert(`Congratulations! Student ${newStudent.fullName} has a new job! Now he ${jobName}`)
}