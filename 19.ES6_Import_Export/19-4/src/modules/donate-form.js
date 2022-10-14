export class DonateForm {
	#form

	constructor(totalAmount, createNewDonate) {
		this.totalAmount = totalAmount
		this.createNewDonate = createNewDonate
		this.#form = document.createElement('form')
		this.#form.className = 'donate-form'

		this.#form.addEventListener('submit', (event) => {
			event.preventDefault()
			const newDonate = {
				amount: Number(event.target.amount.value),
				date: new Date()
			}
			this.#form.amount.value = ' '
			this.createNewDonate(newDonate)
		})
	}

	render() {
		const h1 = document.createElement('h1')
		h1.id = 'total-amount'
		h1.textContent = `${this.totalAmount}$`

		const label = document.createElement('label')
		label.className = 'donate-form__input-label'
		label.textContent = 'Enter amount in $'

		const input = document.createElement('input')
		input.className = 'donate-form__donate-input'
		input.name = 'amount'
		input.type = 'number'
		input.max = '100'
		input.min = '0'
		input.required = true

		const button = document.createElement('button')
		button.className = 'donate-form__submit-button'
		button.type = 'submit'
		button.textContent = 'Donate now'

		label.append(input)
		this.#form.append(h1, label, button)

		return this.#form
	}

	updateTotalAmount(newAmount) {
		const totalAmount = document.querySelector('#total-amount')
		totalAmount.textContent = `${newAmount}$`
	}


}