const myName = 'Ilona'
const programmingLanguage = 'JavaScript'
const courseCreatorName = 'Vladilen'
const reasonText = 'i want to go away from russia'
const numberOfMonth = 3

let myInfoText = `Всем привет! Меня зовут ${myName}. Сейчас я изучаю язык программирования ${programmingLanguage} на курсе по ${programmingLanguage} у ${courseCreatorName}. 
Я хочу стать веб-разработчиком, потому что ${reasonText}. До этого я изучала ${programmingLanguage} ${numberOfMonth} месяцев. Я уверена, что пройду данный курс до конца!`

console.log('myInfoText: ', myInfoText)

// 1
let myInfoText1 = myInfoText.replaceAll('JavaScript', 'JAVASCRIPT')
console.log('Task 1, solution 1: ', myInfoText1)

let language = programmingLanguage.toUpperCase()
let myInfoText11 = myInfoText.replaceAll(programmingLanguage, language)
console.log('Task 1, solution 2: ', myInfoText11)

//2
console.log('Task 2: ', myInfoText.slice(myInfoText.indexOf('Я у')))

//3
console.log('Task 3: ', myInfoText.length)

//4
console.log('Task 4: ', myInfoText[0], myInfoText[myInfoText.length - 1])
