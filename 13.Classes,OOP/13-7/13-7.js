class Developer {
	constructor(fullName, age, position) {
		this.fullName = fullName
		this.age = age
		this.position = position
		this.technologies = []
	}

	code() {
		return {}
	}

	learnNewTechnology(technology) {
		this.technologies.push(technology)
	}
}

class JuniorDeveloper extends Developer {
	constructor(fullName, age) {
		super(fullName, age, 'Junior')
		this.technologies = ['HTML', 'CSS', 'JavaScript']
	}
	code() {
		console.log('Junior developer writes the code...')
	}
}

class MiddleDeveloper extends Developer {
	constructor(fullName, age) {
		super(fullName, age, 'Middle')
		this.technologies = ['HTML', 'CSS', 'JavaScript', 'React']
	}
	code() {
		console.log('Middle developer writes the code...')
	}
}

class SeniorDeveloper extends Developer {
	constructor(fullName, age) {
		super(fullName, age, 'Senior')
		this.technologies = ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS']
	}
	code() {
		console.log('Senior developer writes the code...')
	}
}

const juniorDeveloper = new JuniorDeveloper('Anastasia', 20)
console.log(juniorDeveloper)
const middleDeveloper = new MiddleDeveloper('Igor', 25)
console.log(middleDeveloper)
const seniorDeveloper = new SeniorDeveloper('Maxim', 30)
console.log(seniorDeveloper)

juniorDeveloper.code(); // Junior developer writes the code...
middleDeveloper.code(); // Middle developer writes the code...
seniorDeveloper.code(); // Senior developer writes the code...

console.log(juniorDeveloper.fullName, juniorDeveloper.age,
	juniorDeveloper.position); // 'Anastasia', 20, 'Junior'
console.log(middleDeveloper.fullName, middleDeveloper.age,
	middleDeveloper.position); // 'Igor', 25, 'Middle'
console.log(seniorDeveloper.fullName, seniorDeveloper.age,
	seniorDeveloper.position); // 'Maxim', 30, 'Senior'