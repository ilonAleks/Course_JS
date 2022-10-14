import { DonateForm } from './donate-form.js'
import { DonateList } from './donate-list'

const mockDonates = [
	{ amount: 4, date: new Date() },
	{ amount: 20, date: new Date() },
	{ amount: 3, date: new Date() },
	{ amount: 1, date: new Date() },
]

export default class App {
	#DonateForm
	#DonatList

	constructor() {
		this.#DonateForm = new DonateForm()
		this.#DonatList = new DonateList(mockDonates)
	}
	run() {
		const donateFormHTML = this.#DonateForm.render()
		const donateListHTML = this.#DonatList.render()
		const body = document.body
		body.append(donateFormHTML, donateListHTML)
	}
}