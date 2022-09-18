let userText = prompt('Enter the text')
let wordFromText = prompt('Enter the word from the text')

userText = userText.trim()
wordFromText = wordFromText.trim()

indexOfWord = userText.indexOf(wordFromText)
let result = userText.slice(0, indexOfWord)

alert(`Result: ${result}`)