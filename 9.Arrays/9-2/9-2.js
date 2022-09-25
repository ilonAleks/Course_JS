peopleWaiting = ['Christina ', ' Oleg ', ' Cyril ', ' Maria ', ' Svetlana ', ' Artem ', ' Gleb']

const giveParcel = () => {
	const person = peopleWaiting.shift()
	return alert(`${person} received the package. The queue remains ${peopleWaiting.length} people.`)

}

const leaveQueueWithoutParcel = () => {
	person = peopleWaiting.pop()
	return alert(`${person} not received a parcel and left from the line`)
}

const repeatFunction = (action, amount) => {
	for (let i = 0; i < amount; i++) {
		action()
	}
}

repeatFunction(giveParcel, 3)
repeatFunction(leaveQueueWithoutParcel, 4)

