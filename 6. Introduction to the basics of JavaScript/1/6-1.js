const existedUserLogin = 'The_Best_user'
const existedUserPassword = '12345678'

let userLogin = prompt('Enter Login')
let userPassword = prompt('Enter password')

userLogin = userLogin.trim()
userPassword = userPassword.trim()

// 1 if else
// if (userLogin === existedUserLogin
// 	&& userPassword === existedUserPassword) {
// 	alert(`Welcome, ${userLogin}!`)
// } else {
// 	alert('Login and (or) password is entered incorrectly!')
// }

//2 ? :
const enter = (userLogin === existedUserLogin
	&& userPassword === existedUserPassword)
	? alert(`Welcome, ${userLogin}!`)
	: alert('Login and (or) password is entered incorrectly!')

