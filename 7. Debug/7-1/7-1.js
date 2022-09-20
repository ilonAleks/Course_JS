// let health = prompt('Enter the number of "Health" parameter for the character')
// console.log(typeof (health), health)
// if () { 
// debugger
//   alert('The "Health" parameter should be more than zero!')
// } else () {
//   alert(`The parameter "Health" is equal ${Health}`);
// }

let health = prompt('Enter the number of "Health" parameter for the character')

if (health >= 0 || !health) {
	alert('The "Health" parameter should be more than zero!')
} else {
	alert(`The parameter "Health" is equal ${health}`);
}