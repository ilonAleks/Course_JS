oddSort([7, 3, 4, 9, 5, 2, 17]) // => [3, 5, 4, 7, 9, 2, 17]

function oddSort(arr) {
	for (let first = 0; first < arr.length; first++) {
		for (let second = first; second < arr.length; second++) {
			if (arr[first] % 2 == 1 && arr[second] % 2 == 1 && arr[first] > arr[second]) {
				let temp = arr[first]
				arr[first] = arr[second]
				arr[second] = temp
			}
		}
	}
	return console.log(arr)
}