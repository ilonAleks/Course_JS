const password = prompt('Enter your password', '')

if (password.length >= 3 && password.length <= 20) {
	let splitPassword = password.split('')
	let nums = false
	let letters = false

	for (let i = 0; i < password.length; i++) {

		if (splitPassword[i].charCodeAt(0) >= 65//A
			&& splitPassword[i].charCodeAt(0) <= 90) {//Z
			letters = true
		}


		if (splitPassword[i].charCodeAt(0) >= 48 //0
			&& splitPassword[i].charCodeAt(0) <= 57) {//9
			nums = true
		}
	}

	if (letters && nums) {
		alert('The password is valid. Welcome to your account!')
	} else { alert("1The password doesn't satisfy the conditions! Reload page and try again.") }
}
else {
	alert("2The password doesn't satisfy the conditions! Reload page and try again.")
}