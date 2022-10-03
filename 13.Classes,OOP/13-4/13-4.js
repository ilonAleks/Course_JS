class Dictionary {
	constructor(name) {
		this.name = name
		words = {}
	}
	add(word, description) {
		this.words = {
			word: 'word',
			description: 'description',
		}
	}
	remove() {

	}
	get() {

	}
	showAllWords() {

	}
}

const dictionary = new Dictionary('Толковый словарь');
dictionary.add('JavaScript', 'популярный язык программирования');
dictionary.add('Веб-разработчик', 'Человек, который создает новые сервисы и сайты или поддерживает и дополняет существующие');

dictionary.remove('JavaScript');
dictionary.showAllWords();
// Веб-разработчик - Человек, который создает новые сервисы и сайты или поддерживает и дополняет существующие