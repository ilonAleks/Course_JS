peopleWaiting = ['Кристина', 'Олег', 'Кирилл', 'Мария', 'Светлана', 'Артем', 'Глеб']

const giveParcel = () => {
	const person = peopleWaiting.shift()
	return alert(`${person} получил(а) посылку. В очереди осталось ${peopleWaiting.length} человек.`)

}

const leaveQueueWithoutParcel = () => {
	person = peopleWaiting.pop()
	return alert(`${person} не получил(а) посылку и ушел(ла) из очереди`)
}

// giveParcel()//Кристина
// giveParcel()//Олег
// giveParcel()//Кирилл
// leaveQueueWithoutParcel()//Глеб
// leaveQueueWithoutParcel()//Артем
// leaveQueueWithoutParcel()//Светлана
// leaveQueueWithoutParcel()//Мария

const repeatFunction = (action, amount) => {
	for (let i = 0; i < amount; i++) {
		action()
	}
}

repeatFunction(giveParcel, 3)
repeatFunction(leaveQueueWithoutParcel, 4)

