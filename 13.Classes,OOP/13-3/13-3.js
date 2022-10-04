class CarService {
	static #DefaultWorkingHours = {
		from: '9:00',
		till: '20:00'
	}

	constructor(name, workingHours) {
		this.name = name
		this.workingHours = {
			from: workingHours.from || CarService.#DefaultWorkingHours.from,
			till: workingHours.till || CarService.#DefaultWorkingHours.till
		}
	}

	repairCar(carName) {
		if (!carName) {
			console.error('You need to specify the name of your car in order to repair it')
		}
		const hour = new Date().getHours()
		const fromHour = this.workingHours.from.split(':')[0]
		const tillHour = this.workingHours.till.split(':')[0]
		if (this.hour < fromHour && hour > tillHour) {
			console.log('Unfortunately, we are now closed. Come back tomorrow')
		} else {
			console.log(`Now we will repair your car ${carName}! Please expect`)
		}
	}
}

const carService = new CarService('RepairCarNow', { from: '8:00', till: '20:00' })
carService.repairCar('BMW')