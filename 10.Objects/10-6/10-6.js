function giveTalonsInOrder(patients, orders) {
	const result = []
	for (let i = 0; i < orders.length; i++) {
		for (let j = 0; j < patients.length; j++) {
			if (patients[j].id === orders[i]) {
				result.push({
					id: patients[j].id,
					name: patients[j].name
				})
			}
		}
	}
	return result
}

const ordersArr = [4, 2, 1, 3];
const people = [
	{ id: 1, name: "Максим" },
	{ id: 2, name: "Николай" },
	{ id: 3, name: "Ангелина" },
	{ id: 4, name: "Виталий" },
];

const result = giveTalonsInOrder(people, ordersArr);
console.log('result', result);

/* Возвращает массив
[
	{ id: 4, name: 'Виталий' },
	{ id: 2, name: 'Николай' },
	{ id: 1, name: 'Максим' },
	{ id: 3, name: 'Ангелина' }
]
*/

//! console.log(people[1].id)

//! function giveTalonsInOrder(patients, orders) {
//! 	return patients.sort((name1, name2) => name1[orders] > name2[orders] ? 1 : -1)
//! 	// 4,3,2,1
//! }