// Сейчас вам требуется создать 5 переменных с помощью const:

// myName - ваше имя
// programmingLanguage - язык програамирования
// courseCreatorName - создатель данного курса
// reasonText - причина, почему вы хотите стать веб-разработчиком
// numberOfMonth - количество месяцев, которое вы уделили изучению JavaScript до начала курса

// Подставьте их с помощь 2-го способа конкатенации строк в данный текст.

// Всем привет! Меня зовут, myName. Сейчас я изучаю язык программирования programmingLanguage на курсе по programmingLanguage у courseCreatorName. 
// Я хочу стать веб-разработчиком, потому что reasonText. До этого я изучал(а) programmingLanguage numberOfMonth месяцев. Я уверен(а), что пройду данный курс до конца!

// Выведите конечный текст в консоль и посмотрите на результат в браузере.

const myName = 'Ilona'
const programmingLanguage = 'JavaScript'
const courseCreatorName = 'Vladilen'
const reasonText = 'i want to go away from russia'
const numberOfMonth = 3

const myText = `Всем привет! Меня зовут ${myName}. Сейчас я изучаю язык программирования ${programmingLanguage} на курсе по ${programmingLanguage} у ${courseCreatorName}. 
Я хочу стать веб-разработчиком, потому что ${reasonText}. До этого я изучала ${programmingLanguage} ${numberOfMonth} месяцев. Я уверена, что пройду данный курс до конца!`

console.log(myText)