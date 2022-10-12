const ALBOMS_URL = 'https://jsonplaceholder.typicode.com/albums'
const body = document.body

const divContainer = document.createElement('div')
divContainer.className = 'data-container'
const span = document.createElement('span')
span.id = 'loader'
span.hidden = ' '
span.textContent = 'Download...'
body.append(divContainer)
divContainer.append(span)

const toggleLoader = () => {
	const isHidden = span.hasAttribute('hidden')
	if (isHidden) {
		span.removeAttribute('hidden')
	} else {
		span.setAttribute('hidden', ' ')
	}
}

async function renderAlbums() {
	try {
		toggleLoader()

		const response = await fetch(ALBOMS_URL)
		const data = await response.json()
		console.log(data)

		const ul = document.createElement('ul')
		divContainer.append(ul)

		data.forEach(element => {
			let li = document.createElement('li')
			li.innerText = element.title
			ul.append(li)
		});

	}
	catch (error) {
		divContainer.textContent = 'There was an error in obtaining album data ...'
	}
	finally {
		toggleLoader()
	}
}

renderAlbums()