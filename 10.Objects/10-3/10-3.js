const student = {
	name: 'Maxim',
	programmingLanguage: 'JavaScript',
}

function handleObject(obj, key, action) {
	if (action === 'get') {//должна вернуть значение ключа key в объекте obj
		return Object.keys(obj)//result get ['name', 'programmingLanguage']
	}
	if (action === 'add') {//должна добавить новый ключ key в объект object и присвоить значение пустой строки “”. Также из функции необходимо возвратить обновленный объект obj
		return {
			...obj,
			[key]: ''
		}//result add {name: 'Maxim', programmingLanguage: 'JavaScript', age: ''}
	}
	if (action === 'delete') {//должна удалить свойство key из объекта obj и возвратить обновленный объект.
		delete obj[key]
		return obj//result delete {name: 'Maxim'}
	}
	return obj//должна возвратить объект obj.
	//result over {name: 'Maxim', programmingLanguage: 'JavaScript'}
}

// const result1 = handleObject(student, 'name', 'get')
// console.log('result get', result1)

// const result2 = handleObject(student, 'age', 'add')
// console.log('result add', result2)

const result4 = handleObject(student, '', 'abc')
console.log('result over', result4)

// const result3 = handleObject(student, 'programmingLanguage', 'delete')
// console.log('result delete', result3)