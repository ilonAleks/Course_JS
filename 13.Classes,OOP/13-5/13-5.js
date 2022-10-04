class Dictionary {
	constructor(name) {
		this.name = name
		this.words = {}
	}
	add(word, description) {
		if (this.words[word]) {
			console.log('This word is already in the dictionary')
		} else {
			this.words = {
				...this.words,
				[word]: {
					word: word,
					description: description
				}
			}
		}
	}
	remove(word) {
		delete this.words[word]
	}
	get(word) {
		return this.words[word]
	}
	showAllWords() {
		return Object.values(this.words).map((el) => {
			return `${el.word} - ${el.description}`
		})
	}
}

class HardWordsDictionary extends Dictionary {
	constructor() {
		super()
	}
	add(word, description) {
		if (this.words[word]) {
			console.log('This word is already in the dictionary')
		} else {
			this.words = {
				...this.words,
				[word]: {
					word: word,
					description: description,
					isDifficult: true
				}
			}
		}
	}
}

const hardWordsDictionary = new HardWordsDictionary('Difficult words')
hardWordsDictionary.add('Amateur', 'anyone who is engaged in science or art without special training, possessing only superficial knowledge.')
hardWordsDictionary.add('Neologism', 'new word or expression, as well as the new meaning of the old word.')
hardWordsDictionary.remove('Neologism');
hardWordsDictionary.add('Quantum', 'the indivisible part of any value in physics.')
console.log(hardWordsDictionary.showAllWords())

// Amateur - anyone who is engaged in science or art without special training, possessing only superficial knowledge.
// Quantum - the indivisible part of any value in physics.