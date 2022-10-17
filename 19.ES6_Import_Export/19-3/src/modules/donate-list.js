export class DonateList {
	#divContainer

	constructor(donates) {
		this.donates = donates
		this.#divContainer = document.createElement('div')
		this.#divContainer.className = 'donates-container'
	}

	render() {
		const h2 = document.createElement('h2')
		h2.className = 'donates-container__donates'
		h2.textContent = 'List of Donates'

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
}