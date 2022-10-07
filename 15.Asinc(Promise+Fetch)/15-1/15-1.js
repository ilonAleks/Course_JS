const USERS = 'https://jsonplaceholder.typicode.com/users'

const ol = document.createElement('ol')
ol.id = 'data-container'
const body = document.querySelector('body')
body.append(ol)

const span = document.createElement('span')
span.id = 'loader'
span.hidden = ' '
span.textContent = 'Loading...'
ol.append(span)

const createUserElement = (userName) => {
	const li = document.createElement('li')
	const anchor = document.createElement('a')
	anchor.href = '#'
	anchor.textContent = userName
	li.append(anchor)

	return li
}

const toggleLoader = () => {
	const isHidden = span.hasAttribute('hidden')
	if (isHidden) {
		span.removeAttribute('hidden')
	} else {
		span.setAttribute('hidden', ' ')
	}
}

const getAllUsers = () => {
	toggleLoader()
	const result = fetch(USERS, {})
	result
		.then((response) => {
			if (!response.ok) {
				throw new Error('Wrong URL')
			}
			return response.json()
		})
		.then((users) => {
			users.forEach(user => {
				const userHTML = createUserElement(user.username)
				ol.append(userHTML)
			});
		})
		.catch((error) => {
			console.error(error)
		})
		.finally(() => {
			toggleLoader()
		})
}

getAllUsers()
