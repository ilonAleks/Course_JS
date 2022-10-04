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


const dictionary = new Dictionary('Explanatory dictionary')
dictionary.add('JavaScript', 'popular programming language')
dictionary.add('Web developer', 'a person who creates new services and sites or supports and complements the existing')
dictionary.add('JavaScript', 'popular programming language')
console.log(dictionary.get('JavaScript'))
dictionary.remove('JavaScript')
console.log(dictionary.showAllWords())
// Web developer - a person who creates new services and sites or supports and complements the existing