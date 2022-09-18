const userName = prompt('What is your name?')
const userAge = prompt('How old are you?')
userName1 = (String(userName))
userName1 = userName1.toLowerCase()
userName1 = userName1.trim()

userAge1 = userAge.trim()
userAge1 = (Number(userAge1))


alert(`Your name is ${userName1} and you was ${userAge1} years old`)
