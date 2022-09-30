const student = {
	name: 'Maxim',
	programmingLanguage: 'JavaScript',
}

const result1 = handleObject(student, 'name', 'get')
const result2 = handleObject(student, 'age', 'add')
const result3 = handleObject(student, 'programmingLanguage', 'delete')
const result4 = handleObject(student, ' ', 'abcde')
console.log('result1', result1)
console.log('result2', result2)
console.log('result3', result3)
console.log('result4', result4)

function handleObject(obj, key, action) {
	if (action === 'get') {
		return obj[key]
	}
	if (action === 'add') {
		return obj = {
			...obj,
			[key]: ''
		}
	}
	if (action === 'delete') {
		let newObj = Object.assign({}, obj)
		delete newObj[key]
		return newObj
	} else {
		return obj
	}
}