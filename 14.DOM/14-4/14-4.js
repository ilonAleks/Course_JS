const getTasksList = document.querySelector('.tasks-list')
const getForm = document.querySelector('.create-task-block')

const tasks = [
	{ id: 1, completed: false, text: 'View new JavaScript lesson' },
	{ id: 2, completed: false, text: 'Perform a test after a lesson' },
	{ id: 3, completed: false, text: 'Perform HW after a lesson' },
]

getForm.addEventListener('submit', (event) => {
	event.preventDefault()
	const { target } = event
	const inputValue = target.taskName.value.trim()
	const getTextTasks = tasks.map(task => task.text)

	const setSpan = document.createElement('span')
	setSpan.className = 'error-message-block'
	if (!inputValue) {
		setSpan.textContent = 'The name of the task should not be empty'
		getForm.append(setSpan)
	} else if (getTextTasks.includes(inputValue)) {
		setSpan.textContent = 'The task with this name already exists'
		getForm.append(setSpan)
	} else {
		tasks.push({ id: tasks.length + 1, completed: false, text: `${inputValue}` })
		getTasksList.innerHTML = setTaskItems(tasks)

		document.querySelectorAll('.error-message-block').forEach(err => err.remove())
	}
}
)

getTasksList.innerHTML = setTaskItems(tasks)

function setTaskItems(tasks) {
	return tasks.map(task => {
		return `<div class="task-item" data-task-id="${task.id}">
<div class="task-item__main-container">
	<div class="task-item__main-content">
		<form class="checkbox-form"> 
			<input class="checkbox-form__checkbox" type="checkbox" id="task-${task.id}"> 
			<label for="task-${task.id}"></label> 
		</form> 
		<span class="task-item__text">${task.text}</span>
	</div>
	<button class="task-item__delete-button default-button delete-button" data-delete-task-id="5">Delete</button>
</div>
</div>`
	}).join('')
}

