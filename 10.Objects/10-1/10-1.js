const users = [
	{
		username: 'David',
		status: 'online',
		lastActivity: 10
	}, {
		username: 'Lucy',
		status: 'offline',
		lastActivity: 22
	}, {
		username: 'Bob',
		status: 'online',
		lastActivity: 104
	}
]
// 1 method to create a new array
// function filterOnlineUsers(array, key) {
// 	return arr.filter(function (value) {
// 		return (value.status === key)
// 	})
// }

// const onlineUsers = filterOnlineUsers(users, 'online')
// console.log(onlineUsers)

// 2 method to create a new array
function filterOnlineUsers(users, key, value) {
	const result = []

	for (let i = 0; i < users.length; i++) {
		const obj = users[i]
		if (obj[key] === value) result.push(obj)
	}
	return result
}
const onlineUsers = filterOnlineUsers(users, 'status', 'online')
// console.log(onlineUsers)

const newUsers = onlineUsers.map(user => user.username)
const usersOnlineNames = newUsers.join(', ')
alert(`The following users are online now: ${usersOnlineNames}`)