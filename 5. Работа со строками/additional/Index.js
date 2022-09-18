let javaScriptDescription = 'JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript. JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений.'

//1
const middleString = (javaScriptDescription.length) / 2
const task1 = javaScriptDescription.slice(0, middleString)
console.log(`Результат первого задания: ${task1}`)

//2
let task2 = task1.replaceAll('а', 'А')
task2 = task2.replaceAll('a', 'A')
console.log(`Результат второго задания: ${task2}`)

//3
const task3 = task2.replaceAll(' ', '')
console.log(`Результат третьего задания: ${task3}`)

//4
const task4 = task3.repeat(3)
console.log(`Результат четвертого задания: ${task4}`)

//5
const middleString5 = (task4.length) / 2
const task5 = task4.slice(0, middleString5)
console.log(`Результат пятого задания: ${task5}`)

//6
console.log(`Результат шестого задания: ${task5}`)