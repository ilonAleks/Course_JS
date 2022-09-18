let userText = prompt('Введите текст')
let wordFromText = prompt('Введите слово из текста')

userText = userText.trim()
wordFromText = wordFromText.trim()

indexOfWord = userText.indexOf(wordFromText)
let result = userText.slice(0, indexOfWord)

alert(`Результат: ${result}`)