const userName = prompt('Как вас зовут?')
const userAge = prompt('Сколько вам лет?')
userName1 = (String(userName))
userName1 = userName1.toLowerCase()
userName1 = userName1.trim()

userAge1 = userAge.trim()
userAge1 = (Number(userAge1))


alert(`Вас зовут ${userName1} и вам ${userAge1}лет`)
