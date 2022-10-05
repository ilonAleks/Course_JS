const body = document.body
const form = document.querySelector('.create-task-block')
const tasksList = document.querySelector('.tasks-list')

const modalTemplate = `<div class="modal-overlay modal-overlay_hidden">
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
body.insertAdjacentHTML('afterbegin', modalTemplate)
const modalOverlayInDOM = body.querySelector('.modal-overlay')
let tasks = [
	{
		id: 1,
		completed: false,
		text: 'Посмотреть новый урок по JavaScript',
	},
	{
		id: 2,
		completed: false,
		text: 'Выполнить тест после урока',
	},
	{
		id: 3,
		completed: false,
		text: 'Выполнить ДЗ после урока',
	},
]

form.addEventListener('submit', (event) => {
	event.preventDefault()
	const { target } = event
	let newTaskName = target.taskName.value.trim()
	let keyTaskName = tasks.map(task => task.text)
	let errorBlock = document.createElement('span')
	errorBlock.className = 'error-message-block'

	if (!newTaskName) {
		errorBlock.innerText = 'Название задачи не должно быть пустым'
		form.append(errorBlock)
	} else if (keyTaskName.includes(newTaskName)) {
		errorBlock.innerText = 'Задача с таким названием уже существует'
		form.append(errorBlock)
	} else {
		tasks.push({
			id: new Date().getTime(),
			completed: false,
			text: newTaskName
		})
		form.taskName.value = ''
		tasksList.innerHTML = taskRender(tasks)

		const errorBlockFromDom = form.querySelectorAll('.error-message-block')
		errorBlockFromDom.forEach(err => err.remove())
	}
})
function taskRender(tasks) {
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
            <button class="task-item__delete-button default-button delete-button" data-delete-task-id="${task.id}">
                Удалить
            </button>
        </div>
    </div>`
	}).join(' ')
}
let dataTaskDelete

tasksList.addEventListener('click', (event) => {
	event.preventDefault()
	const { target } = event
	dataTaskDelete = target.dataset.deleteTaskId
	if (target.className.includes('delete-button')) {
		modalOverlayInDOM.classList.remove('modal-overlay_hidden')
	}
})

modalOverlayInDOM.addEventListener('click', (event) => {
	event.preventDefault()
	const { target } = event
	if (target.className.includes('delete-modal__cancel-button')) {
		modalOverlayInDOM.classList.add('modal-overlay_hidden')
	}

	if (target.className.includes('delete-modal__confirm-button')) {
		removeNode(dataTaskDelete)
		modalOverlayInDOM.classList.add('modal-overlay_hidden')
	}

})

function removeNode(dataTaskDelete) {
	const deleteElement = tasksList.querySelector(`[data-task-id='${dataTaskDelete}']`)
	deleteElement.remove()
	tasks = tasks.filter(el => el.id !== Number(dataTaskDelete))

}
tasksList.innerHTML = taskRender(tasks)