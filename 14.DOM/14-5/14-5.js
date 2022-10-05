const getTasksList = document.querySelector('.tasks-list')
const getForm = document.querySelector('.create-task-block')
const body = document.body
const modalWindowToDelete = `<div class="modal-overlay modal-overlay_hidden">
<div class="delete-modal">
	<h3 class="delete-modal__question">
		Вы действительно хотите удалить эту задачу?
	</h3>
	<div class="delete-modal__buttons">
		<button class="delete-modal__button delete-modal__cancel-button">
			Отмена
		</button>
		<button class="delete-modal__button delete-modal__confirm-button">
			Удалить
		</button>
	</div>
</div>
</div>`
body.insertAdjacentHTML('afterbegin', modalWindowToDelete)

const tasks = [
	{ id: 1, completed: false, text: 'Посмотреть новый урок по JavaScript' },
	{ id: 2, completed: false, text: 'Выполнить тест после урока' },
	{ id: 3, completed: false, text: 'Выполнить ДЗ после урока' },
]

getForm.addEventListener('submit', (event) => {
	event.preventDefault()
	const { target } = event
	const inputValue = target.taskName.value.trim()
	const getTextTasks = tasks.map(task => task.text)

	const setSpan = document.createElement('span')
	setSpan.className = 'error-message-block'
	if (!inputValue) {
		setSpan.textContent = 'Название задачи не должно быть пустым'
		getForm.append(setSpan)
	} else if (getTextTasks.includes(inputValue)) {
		setSpan.textContent = 'Задача с таким названием уже существует'
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
	<button class="task-item__delete-button default-button delete-button" data-delete-task-id="5">Удалить</button>
</div>
</div>`
	}).join('')
}

let taskDelete
const modalOverlay = body.querySelector('.modal-overlay')
getTasksList.addEventListener('click', (event => {
	event.preventDefault()
	const { target } = event
	taskDelete = target.dataset.deleteTaskId
	if (target.className.includes('delete-button')) {
		modalOverlay.classList.remove('modal-overlay_hidden')
	}
}))

modalOverlay.addEventListener('click', event => {
	event.preventDefault()
	const { target } = event
	if (target.className.includes('delete-modal__cancel-button')) {
		modalOverlay.classList.add('modal-overlay_hidden')
	}
	if (target.className.includes('delete-modal__confirm-button')) {
		removeTask(taskDelete)
		modalOverlay.classList.add('modal-overlay_hidden')
	}
})

function removeTask(taskDelete) {
	const elemDelete = getTasksList.querySelector(`[data-task-id='${taskDelete}']`)
	elemDelete.remove()
	tasks = tasks.filter(el => el.id !== Number(taskDelete))
}