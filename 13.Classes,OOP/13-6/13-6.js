class Dictionary {
	#name
	#words
	constructor(name) {
		this.#name = name
		this.#words = {}
	}

	get mainName() {
		return this.#name
	}
	set setMainName(name) {
		this.#name = name
	}

	get allWords() {
		return this.#words
	}

	addNewWord(word, description) {
		return this.#words = {
			...this.#words,
			[word]: {
				word: word,
				description: description
			}
		}
	}

	add(word, description) {
		return this.addNewWord(word, description)
	}
	remove(word) {
		delete this.#words[word]
	}
	get(word) {
		return this.#words[word]
	}
	showAllWords() {
		return Object.values(this.#words).map((el) => {
			return `${el.word} - ${el.description}`
		})
	}
}

class HardWordsDictionary extends Dictionary {
	constructor() {
		super()
	}
	add(word, description) {
		return this.addNewWord(word, description)
	}
}

const hardWordsDictionary = new HardWordsDictionary('Difficult words')
hardWordsDictionary.add('Amateur', 'anyone who is engaged in science or art without special training, possessing only superficial knowledge.')
hardWordsDictionary.add('Neologism', 'new word or expression, as well as the new meaning of the old word.')
hardWordsDictionary.add('Quantum', 'the indivisible part of any value in physics.')

hardWordsDictionary.remove('Neologism')
console.log(hardWordsDictionary.showAllWords())