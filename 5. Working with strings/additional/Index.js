let javaScriptDescription = 'JavaScript is a multi-paradigm programming language. Supports object-oriented, imperative and functional styles. It is the implementation of the Ecmascript specification. JavaScript is usually used as a built-in language for software access to applications.'

//1
let middleString = Math.floor(javaScriptDescription.length / 2)
const task1 = javaScriptDescription.slice(0, middleString)
console.log(`The result of the first task: ${task1}`)

//2
let task2 = task1.replaceAll('а', 'А')
task2 = task2.replaceAll('a', 'A')
console.log(`The result of the second task: ${task2}`)

//3
const task3 = task2.replaceAll(' ', '')
console.log(`The result of the third task: ${task3}`)

//4
const task4 = task3.repeat(3)
console.log(`The result of the fourth task: ${task4}`)

//5
const middleString5 = Math.floor((task4.length) / 2)
const task5 = task4.slice(0, middleString5)
console.log(`The result of the fifth task: ${task5}`)

//6
console.log(`The result of the sixth task: ${task5}`)