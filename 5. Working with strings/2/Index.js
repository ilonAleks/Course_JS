const myName = 'Ilona'
const programmingLanguage = 'JavaScript'
const courseCreatorName = 'Vladilen'
const reasonText = 'i want to go away from russia'
const numberOfMonth = 3

let myInfoText = `Hi all! My name is ${myName}. 
Now I am studying the programming language ${programmingLanguage} 
on the course ${programmingLanguage} in ${courseCreatorName}. 
I want to become a web developer because ${reasonText}. 
Before that, I studied ${programmingLanguage} ${numberOfMonth} months.
I am sure that I will go through this course to the end!`

console.log('myInfoText: ', myInfoText)

// 1
let myInfoText1 = myInfoText.replaceAll('JavaScript', 'JAVASCRIPT')
console.log('Task 1, solution 1: ', myInfoText1)

let language = programmingLanguage.toUpperCase()
let myInfoText11 = myInfoText.replaceAll(programmingLanguage, language)
console.log('Task 1, solution 2: ', myInfoText11)

//2
console.log('Task 2: ', myInfoText.slice(myInfoText.indexOf('I am su')))

//3
console.log('Task 3: ', myInfoText.length)

//4
console.log('Task 4: ', myInfoText[0], myInfoText[myInfoText.length - 1])
