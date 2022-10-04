class Person {
	constructor(name, age) {
		this.name = name
		this.age = age
	}
	compareAge(Person) {
		if (this.age >= Person.age) {
			console.log(`${this.name} older than ${Person.name}`)
		} else {
			console.log(`${this.name} younger than ${Person.name}`)
		}
	}
}

const person1 = new Person('Maxim', 24);
const person2 = new Person('Svetlana', 36);
const person3 = new Person('Irina', 23);

person1.compareAge(person2); // Maxim younger than Svetlana
person2.compareAge(person3); // Svetlana older than Irina
person3.compareAge(person1); // Irina younger than Maxim