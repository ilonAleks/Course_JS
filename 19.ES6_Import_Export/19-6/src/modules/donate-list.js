import * as utils from '../core/utils/index.js'

export class DonateList {
	#divContainer

	constructor(donates) {
		this.donates = donates
		this.#divContainer = document.createElement('div')
		this.#divContainer.className = 'donates-container'
		this.donate.date = utils.getFormattedTime(date)
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
			donateItem.innerHTML = `${donate.date} - <b>${donate.amount}</b>`
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
			donateItem.innerHTML = `${donate.date} - <b>${donate.amount}</b>`
			divDonates.append(donateItem)
		})
	}
}