const existedUserLogin = 'The_Best_user'
const existedUserPassword = '12345678'

let userLogin = prompt('Enter Login')
let userPassword = prompt('Enter password')

if (!userLogin) {
	alert('You did not enter your login! Try again')
	userLogin = prompt('Enter Login')
} else if (!userPassword) {
	alert('You did not enter your password! Try again')
	userPassword = prompt('Enter password')
}

//! проверка работает не совсем корректно
//! т.е. если например не ввести с первого раза ни логин, ни пароль,
//! предложат ввести логин второй раз и все равно выведется сообщение, 
//! что логин-пароль не совпадает. А надо, чтобы выводилось еще и предложение
//! ввести пароль

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
