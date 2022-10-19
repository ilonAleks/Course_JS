console.log(isPalindrome1('racecar')) // true
console.log(isPalindrome1('programmer')) // false

function isPalindrome1(str1) {
	let check = ''
	for (let i = str1.length - 1; i >= 0; --i) {
		check += str1[i]
	}
	return str1 == check
}



console.log(isPalindrome2('racecar')) // true
console.log(isPalindrome2('programmer')) // false

function isPalindrome2(str2) {
	return str2.split('').reverse().join('') == str2
}