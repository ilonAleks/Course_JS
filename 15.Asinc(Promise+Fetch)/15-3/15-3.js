
const PHOTO = 'https://jsonplaceholder.typicode.com/photos'

const ul = document.createElement('ul')
ul.id = 'data-container'
const body = document.body
body.append(ul)

const span = document.createElement('span')
span.id = 'loader'
span.hidden = true
span.textContent = 'Download...'
ul.append(span)

const createFotoElement = (url, title) => {
	const li = document.createElement('li')
	li.className = 'photo-item'
	const img = document.createElement('img')
	img.className = 'photo-item__image'
	img.src = url
	const h3 = document.createElement('h3')
	h3.className = 'photo-item__title'
	h3.textContent = title
	ul.append(li)
	li.append(img, h3)

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

const getFastestLoadedPhoto = (ids) => {
	toggleLoader()
	const requests = ids.map((id) => fetch(`${PHOTO}/${id}`))
	Promise.all(requests)
		.then((responses) => {
			const dataResults = responses.map((response) => response.json())
			return Promise.race(dataResults)
		})
		.then((photo) => {
			console.log(photo)
			createFotoElement(photo.thumbnailUrl, photo.title)
		})
		.catch((error) => {
			console.error(error)
		})
		.finally(() => {
			toggleLoader()
		})
}

getFastestLoadedPhoto([60, 12, 55])