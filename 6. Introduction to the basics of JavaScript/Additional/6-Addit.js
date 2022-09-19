const password = prompt('Enter your password', '')

// /[a-zA-Z0-9]/gi
// (?=.* [0 - 9])(?=.* [A - Z]).{ 3, 20 }
if (password.match([A - Z])
	&& password.match([0 - 9])
	&& password.length >= 3
	&& password.length <= 20) {
	alert('The password is valid. Welcome to your account!')
} else { alert("The password doesn't satisfy the conditions! Reload page and try again.") }