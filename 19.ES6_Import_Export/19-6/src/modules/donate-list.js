import * as utils from '../core/utils/index.js'
import { Settings } from '../core/constants/settings'

export class DonateList {
	#divContainer

	constructor(donates) {
		this.donates = donates
		this.#divContainer = document.createElement('div')
		this.#divContainer.className = 'donates-container'

	}

	render() {
		const h2 = document.createElement('h2')
		h2.className = 'donates-container__title'
		h2.textContent = 'Donate List'

		const divDonates = document.createElement('div')
		divDonates.className = 'donates-container__donates'

		this.donates.map((donate) => {
			const donateItem = document.createElement('div')
			donateItem.className = 'donate-item'
			donateItem.innerHTML = `${this.#getTime(donate.date)} - <b>${donate.amount}${Settings.currency}</b>`
			divDonates.append(donateItem)
		})

		this.#divContainer.append(h2, divDonates)

		return this.#divContainer
	}

	updateDonates(updatedDonates) {
		const divDonates = document.querySelector('.donates-container__donates')
		divDonates.textContent = ''

		updatedDonates.map((donate) => {
			const donateItem = document.createElement('div')
			donateItem.className = 'donate-item'
			donateItem.innerHTML = `${this.#getTime(donate.date)} - <b>${donate.amount}${Settings.currency}</b>`
			divDonates.append(donateItem)
		})
	}

	#getTime(date) {
		return utils.getFormattedTime(date)
	}
}