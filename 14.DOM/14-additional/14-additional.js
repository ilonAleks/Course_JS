const options = [
	{ value: 1, text: 'JavaScript' },
	{ value: 2, text: 'NodeJS' },
	{ value: 3, text: 'ReactJS' },
	{ value: 4, text: 'HTML' },
	{ value: 5, text: 'CSS' },
]

class CustomSelect {
	#id
	#options

	constructor(id, options) {
		this.#id = id
		this.#options = options
	}

	render(container) {
		const div = document.createElement('div')
		div.slassName = `select-dropdown select-dropdown--123`

		const button = document.createElement('button')
		button.slassName = `select-dropdown__button select-dropdown__button--123`

		const span = document.createElement('span')
		span.slassName = `select-dropdown select-dropdown--123`
		span.innerText = 'Выберите Элемент'

		const ul = document.createElement('ul')
		ul.slassName = `select-dropdown__list select-dropdown__list--123`

		const li = document.createElement('li')
		li.slassName = 'select-dropdown__list-item'

		div.prepend(button)
		div.append(ul)
		button.append(span)
		ul.append(li)


	}
	click(element) {
		//? document.querySelector('.select-dropdown__button')
		element.addEventListener('click', (event => {
			// event.preventDefault()
			// event.stopPropagation()
			const { target } = event
			if (target.className.includes('select-dropdown__button'))
		}))
	}

}

const customSelect = new CustomSelect('123', options);
const mainContainer = document.querySelector('#container');
customSelect.render(mainContainer);



`<div class="select-dropdown select-dropdown--123">
<button class="select-dropdown__button select-dropdown__button--123">
		<span class="select-dropdown select-dropdown--123">Выберите Элемент</span>
</button>
<ul class="select-dropdown__list select-dropdown__list--123">
		<li class="select-dropdown__list-item" data-value="1">JavaScript</li>
		<li class="select-dropdown__list-item" data-value="2">NodeJS</li>
		<li class="select-dropdown__list-item" data-value="3">ReactJS</li>
		<li class="select-dropdown__list-item" data-value="4">HTML</li>
		<li class="select-dropdown__list-item" data-value="5">CSS</li>
</ul>
</div>
`