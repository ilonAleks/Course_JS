unique([1, 1, 2, 2, 4, 2, 3, 7, 3]) // => [1, 2, 4, 3, 7]

function unique(arr) {
	let newArr = arr.reduce((acc, item) => {
		if (acc.includes(item)) {
			return acc
		}
		return [...acc, item]
	}, [])
	return console.log(newArr)
}