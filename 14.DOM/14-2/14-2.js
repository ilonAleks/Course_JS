const tasks = [
	{ id: 1, completed: false, text: 'View new JavaScript lesson' },
	{ id: 2, completed: false, text: 'Perform a test after a lesson' },
	{ id: 3, completed: false, text: 'Perform HW after a lesson' },
]
const getTasksList = document.querySelector('.tasks-list')
let taskItems = tasks.map(task => {
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
})

getTasksList.innerHTML = taskItems.join('')