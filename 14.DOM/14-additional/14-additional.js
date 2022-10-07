const options = [
	{ value: 1, text: 'JavaScript' },
	{ value: 2, text: 'NodeJS' },
	{ value: 3, text: 'ReactJS' },
	{ value: 4, text: 'HTML' },
	{ value: 5, text: 'CSS' },
]

class CustomSelect {
	#currentSelectedOption

	constructor(id, options) {
		this.id = id
		this.options = options
		this.#currentSelectedOption = 0
	}

	render(container) {
		const div = document.createElement('div')
		div.className = 'select-dropdown select-dropdown--123'

		const button = document.createElement('button')
		button.className = 'select-dropdown__button select-dropdown__button--123'

		const span = document.createElement('span')
		span.className = 'select-dropdown select-dropdown--123 select-dropdown__span'
		span.innerText = 'Select the element'

		const ul = document.createElement('ul')
		ul.className = 'select-dropdown__list select-dropdown__list--123'

		options.forEach((el) => {
			let li = document.createElement('li')
			li.className = 'select-dropdown__list-item'
			li.innerText = el.text
			li.dataset.value = String(el.value)
			ul.append(li)
		})

		div.append(button)
		button.append(span)
		div.append(ul)
		container.append(div)
	}

	click(element) {
		element.addEventListener('click', event => {
			event.preventDefault()
			const { target } = event

			if (target.className.includes('select-dropdown__button')) {
				dropDownList.classList.toggle('active')
			}
			if (target.className.includes('select-dropdown__list-item')) {
				for (let i = 0; i < target.parentElement.children.length; i++) {
					target.parentElement.children[i].classList.remove('selected')
				}
				target.classList.add('selected')
				element.textContent = target.dataset.value
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

const dropDownList = mainContainer.querySelector('.select-dropdown__list')
const selectDropdown = mainContainer.querySelector('.select-dropdown')
customSelect.click(selectDropdown)