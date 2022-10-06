let options = [
	{ value: 1, text: 'JavaScript' },
	{ value: 2, text: 'NodeJS' },
	{ value: 3, text: 'ReactJS' },
	{ value: 4, text: 'HTML' },
	{ value: 5, text: 'CSS' }
]


class CustomSelect {
	#currentSelectedOption
	constructor(id, options) {
		this.id = id
		this.options = options
		this.#currentSelectedOption = 0
	}

	render(container) {
		const divSelect = document.createElement('div')
		divSelect.className = 'select-dropdown select-dropdown--123'
		const button = document.createElement('button')
		button.className = 'select-dropdown__button select-dropdown__button--123'
		divSelect.append(button)
		const span = document.createElement('span')
		span.className = 'select-dropdown select-dropdown--123 select-dropdown__span'
		span.innerText = 'Выберите Элемент'
		button.append(span)
		const ul = document.createElement('ul')
		ul.className = 'select-dropdown__list select-dropdown__list--123'
		divSelect.append(ul)

		options.forEach((el, idx) => {
			let li = document.createElement('li')
			li.className = 'select-dropdown__list-item'
			li.innerText = el.text
			li.dataset.value = String(el.value)
			ul.append(li)
		})
		container.append(divSelect)
	}

	selectDropdown(elDropdown) {
		elDropdown.addEventListener('click', (event) => {
			// event.preventDefault()
			event.stopPropagation()
			const { target } = event

			if (target.className.includes('select-dropdown__button') || target.className.includes('select-dropdown__span')) {
				listDropdown.classList.toggle('active')
			}
			if (target.className.includes('select-dropdown__list-item')) {
				for (let i = 0; i < target.parentElement.children.length; i++) {
					target.parentElement.children[i].classList.remove('selected')
				}
				target.classList.add('selected')
				elDropdown.textContent = target.dataset.value
				this.setSelectedValue = target.dataset.value
			}
		})
	}

	get selectedValue() {
		return options[this.#currentSelectedOption]
	}

	set setSelectedValue(value) {
		this.#currentSelectedOption = value
	}
}

const customSelect = new CustomSelect('123', options);
const mainContainer = document.querySelector('#container');
customSelect.render(mainContainer);

const selectDropdown = mainContainer.querySelector('.select-dropdown')
//!
const listDropdown = mainContainer.querySelector('.select-dropdown__list')
customSelect.selectDropdown(selectDropdown)