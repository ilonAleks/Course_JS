const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos';

const getTodosByIds = async (ids) => {
	try {
		ids.map(async (id) => {
			const response = await fetch(`${TODOS_URL}/${id}`)
			if (!response) {
				throw new Error('Error of response')
			}
			const values = await response.json()
			if (!values) {
				throw new Error('Error of values')
			}
			console.log(values)
		})
	} catch (error) {
		console.log(error)
	}
}

getTodosByIds([43, 21, 55, 100, 10])