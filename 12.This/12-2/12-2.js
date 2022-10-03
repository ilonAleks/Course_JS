const dog = {
	name: 'Charlie',
	type: 'Dog',
	makeSound() {
		return 'Woof-woof'
	}
}
const bird = {
	name: 'Peatya',
	type: 'Sparrow',
	makeSound() {
		return 'Chic-chiric';
	}
}

function makeDomestic(boolean) {
	console.log(`${this.type} named ${this.name} says ${this.makeSound()}`)
	return {
		...this,
		isDomestic: boolean
	}
}

const bindDog = makeDomestic.bind(dog)('true')
console.log(bindDog)

const callBird = makeDomestic.call(bird, 'false')
console.log(callBird)

const applyBird = makeDomestic.apply(bird, ['false'])
console.log(applyBird)