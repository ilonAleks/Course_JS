import { DonateForm } from './donate-form.js'
import { DonateList } from './donate-list.js'

export default class App {
	#DonateForm
	#DonatList

	constructor() {
		this.state = {
			donates: [],
			totalAmount: Number(0)
		}
		this.#DonateForm = new DonateForm(this.state.totalAmount, this.createNewDonate.bind(this))
		this.#DonatList = new DonateList(this.state.donates)

	}

	run() {
		const donateFormHTML = this.#DonateForm.render()
		const donateListHTML = this.#DonatList.render()
		const body = document.body
		body.append(donateFormHTML, donateListHTML)
	}

	createNewDonate(newDonate) {
		this.state.donates.push(newDonate)
		this.state.totalAmount = this.state.totalAmount + Number(newDonate.amount)
		this.#DonatList.updateDonates(this.state.donates)
		this.#DonateForm.updateTotalAmount(this.state.totalAmount)
	}
}