const USERS = 'https://jsonplaceholder.typicode.com/users'

const ol = document.createElement('ol')
ol.id = 'data-container'
const body = document.body
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

function getUsersByIds(id) {
	toggleLoader()
	const requests = id.map((id) => fetch(`${USERS}/${id}`))
	Promise.all(requests)
		.then((responses) => {
			const dataResults = responses.map((response) => response.json())
			return Promise.all(dataResults)
		})
		.then((ids) => {
			ids.forEach((id) => {
				const idHTML = createUserElement(id.name)
				ol.append(idHTML)
			})
		})
		.catch((error) => {
			console.error(error)
		})
		.finally(() => {
			toggleLoader()
		})
}

getUsersByIds([5, 6, 2, 1])
