const array1 = []

for (let i = 0; i < 3; i++) {
	const array2 = []
	for (let j = 1; j <= 5; j++) {
		array2.push(j)
	}
	array1.push(array2)
}

console.log(array1)