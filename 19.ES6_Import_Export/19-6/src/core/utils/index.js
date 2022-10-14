import moment from "moment/moment"

export function calculateSumOfNumbers(numbers) {
	return numbers.reduce((acc, num) => acc + num, 0);
}

export function getFormattedTime(date) {
	return moment(date).format('MMMM Do YYYY, h:mm:ss a')
}