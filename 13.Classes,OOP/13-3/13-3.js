class CarService {
	constructor(name, workingHours) {
		this.name = name
		this.workingHours = {
		}
	}

	static DefaultWorkingHours = {
		from: '9:00',
		till: '20:00',
	}
	repairCar(carName) {
		console.error('Вам необходимо указать название машины, чтобы ее отремонтировать')
		console.log('К сожалению, мы сейчас закрыты. Приходите завтра')
		console.log(`Сейчас отремонтируем вашу машину ${carName}! Ожидайте, пожалуйста`)
	}
}

const carService = new CarService('RepairCarNow', { from: '8:00', till: '20:00' });
carService.repairCar('BMW');