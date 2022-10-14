export class DonateForm {
	#form

	constructor() {
		this.#form = document.createElement('form')
		this.#form.className = 'donate-form'
	}

	render() {
		const h1 = document.createElement('h1')
		h1.id = 'total-amount'
		h1.textContent = '28$'

		const label = document.createElement('label')
		label.className = 'donate-form__input-label'
		label.textContent = 'Введите сумму в $'

		const input = document.createElement('input')
		input.className = 'donate-form__donate-input'
		input.name = 'amount'
		input.type = 'number'
		input.max = '100'
		input.min = '0'
		input.required = ' '

		const button = document.createElement('button')
		button.className = 'donate-form__submit-button'
		button.type = 'submit'
		button.textContent = 'Задонатить'

		this.#form.append(h1, label, button)
		label.append(input)

		return this.#form
	}
}