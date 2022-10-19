function groupBy(arr, fn) {
	let result = {}
	for (let i = 0; i < arr.length; i++) {
		if (!result[fn(arr[i])]) {
			result[fn(arr[i])] = [arr[i]]
		} else {
			result[fn(arr[i])].push(arr[i])
		}
	}
	return result
}

console.log(groupBy([2.3, 2.2, 3.4], Math.floor))
// result
// {
//  2: [2.3, 2.2],
//  3: [3.4]
// }