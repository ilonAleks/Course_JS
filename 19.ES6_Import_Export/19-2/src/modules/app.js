import { DonateForm } from './donate-form.js'

export default class App {
	#DonateForm

	constructor() {
		this.#DonateForm = new DonateForm()
	}
	run() {
		const donateFormHTML = this.#DonateForm.render()
		const body = document.body
		body.append(donateFormHTML)
	}
}