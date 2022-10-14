import { DonateForm } from './donate-form.js'
import { DonateList } from './donate-list.js'
import * as utils from '../core/utils/index.js'

const mockDonates = [
	{ amount: 4, date: new Date() },
	{ amount: 20, date: new Date() },
	{ amount: 3, date: new Date() },
	{ amount: 1, date: new Date() },
];


export default class App {
	#DonateForm
	#DonatList

	constructor() {
		this.state = {
			donates: mockDonates,
			totalAmount: utils.calculateSumOfNumbers(this.totalAmount)
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