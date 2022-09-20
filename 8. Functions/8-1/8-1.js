// function declaration
getName1('Ilona1')

function getName1(name) {
	return console.log(`The name is ${name}`)
}
// function expression
const getName2 = function (name) {
	return console.log(`The name is ${name}`)
}

getName2('Ilona2')

// arrow function

const getName3 = name => {
	return console.log(`The name is ${name}`)
}

getName3('Ilona3')