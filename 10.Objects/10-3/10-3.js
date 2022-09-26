const student = {
	name: 'Maxim',
	programmingLanguage: 'JavaScript',
}

function handleObject(obj, key, action) {
	if (action === 'get') {
		return Object.keys(obj)
	}
	if (action === 'add') {
		return {
			...obj,
			[key]: ''
		}
	}
	if (action === 'delete') {
		delete obj[key]
		return obj
	}
	return obj
}

// const result1 = handleObject(student, 'name', 'get')
// console.log('result get', result1)

// const result2 = handleObject(student, 'age', 'add')
// console.log('result add', result2)

// const result4 = handleObject(student, '', 'abc')
// console.log('result over', result4)

const result3 = handleObject(student, 'programmingLanguage', 'delete')
console.log('result delete', result3)