function getKiller(suspectInfo, deadPeople) {
	let suspect = Object.entries(suspectInfo).map(el => {
		let suspectPeople = 0
		for (let i = 0; i < el[1].length; i++) {
			for (let j = 0; j < deadPeople.length; j++) {
				if (el[1][i] === deadPeople[j]) {
					suspectPeople++
				}
			}
		}
		return {
			name: el[0],
			suspectPeople: suspectPeople
		}
		//{name: 'James', suspect 2}
		//{name: 'Johnny', suspect 1}
		//{name: 'Peter', suspect 0}
	})
	let killer = suspect.sort((a, b) => b.suspectPeople - a.suspectPeople)
	return killer[0].name
}



console.log(getKiller(
	{
		'James': ['Jacob', 'Bill', 'Lucas'],
		'Johnny': ['David', 'Kyle', 'Lucas'],
		'Peter': ['Lucy', 'Kyle'],
	}, ['Lucas', 'Bill']
)) // Killer is James

console.log(getKiller(
	{
		'Brad': [],
		'Megan': ['Ben', 'Kevin'],
		'Finn': [],
	},
	['Ben']
)) // Killer is Megan