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

let onlineUsers = []
for (let i = 0; i < users.length; i++) {
	if (users[i]['status'] === 'online') {
		onlineUsers.push(users[i].username)
	}
}

let usersOnlineNames = onlineUsers.join(', ')
alert(`The following users are online now: ${usersOnlineNames}`)