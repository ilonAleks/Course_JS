const POST = 'https://jsonplaceholder.typicode.com/posts'
const COMMENT = 'https://jsonplaceholder.typicode.com/comments'
const body = document.body

const createPostElement = (post) => {
	const { id, title, body: bodyText } = post
	const div = document.createElement('div')
	div.id = id
	div.className = 'post'

	const h1 = document.createElement('h1')
	h1.className = 'post__title'
	h1.textContent = title

	const p = document.createElement('p')
	p.className = 'post__text'
	p.textContent = bodyText

	const b = document.createElement('b')
	b.className = 'post__comments-text'
	b.textContent = bodyText

	const divComs = document.createElement('div')
	divComs.className = 'post__comments'

	body.append(div)
	div.append(h1)
	div.append(p)
	div.append(b)
	div.append(divComs)
}

const createCommentElement = (comment) => {
	const { email, body: bodyComment } = comment
	const divCom = document.createElement('div')
	divCom.className = 'post__comment'

	const spanAuthor = document.createElement('span')
	spanAuthor.className = 'post-comment__author'
	spanAuthor.textContent = email

	const spanCom = document.createElement('span')
	spanCom.className = 'post-comment__text'
	spanCom.textContent = ` ${bodyComment}`

	divCom.append(spanAuthor)
	divCom.append(spanCom)
	return divCom
}

const renderPost = (postId) => {
	const response = fetch(`${POST}/${postId}`)
	response
		.then((result) => {
			if (!result.ok) {
				throw new Error('Error')
			}
			return result.json()
		})
		.then((req) => {
			createPostElement(req)
			const div = document.querySelector('.post__comments')
			const requestComments = fetch(`${COMMENT}/?postId=${postId}`)
			requestComments
				.then((comRes) => {
					if (!comRes.ok) {
						throw new Error('Error')
					}
					return comRes.json()
				})
				.then((responseComments) => {
					return responseComments.map(comment => {
						div.append(createCommentElement(comment))
					})
				})
				.catch((error) => {
					console.error(error)
				})
		})
		.catch((error) => {
			console.error(error)
		})


}

renderPost(1)

// [
//   {
//     "userId": 1,
//     "id": 1,
//     "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//     "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
//   },]

// [
//   {
//     "postId": 1,
//     "id": 1,
//     "name": "id labore ex et quam laborum",
//     "email": "Eliseo@gardner.biz",
//     "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
//   },]