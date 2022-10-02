const peopleWithVisa = [
	{
		firstName: 'Stasia',
		lastName: 'Ward',
		criminalRecord: true,
		passportExpiration: '19.06.2024',
	},
	{
		firstName: 'Elliot',
		lastName: 'Baker',
		criminalRecord: false,
		passportExpiration: '04.06.2023',
	},
	{
		firstName: 'Leighann',
		lastName: 'Scott',
		criminalRecord: true,
		passportExpiration: '31.07.2023',
	},
	{
		firstName: 'Nick',
		lastName: 'Pop',
		criminalRecord: false,
		passportExpiration: '31.12.2022',
	},
]

const result = allowVisa(peopleWithVisa)
console.log('result', result)

function allowVisa(clients) {
	let arr = []
	for (let i = 0; i < clients.length; i++) {
		let dateClient = new Date((clients[i].passportExpiration).split('.').reverse().join(', ')).getTime()
		if (clients[i].criminalRecord === false && dateClient > Date.now()) {
			arr.push({
				firstName: clients[i].firstName,
				lastName: clients[i].lastName,
				criminalRecord: clients[i].criminalRecord,
				passportExpiration: clients[i].passportExpiration
			}
			)
		}
	}
	return arr
}

// let data = '31.12.2022'
// console.log(data.split('.'))//['31', '12', '2022']
// console.log(data.split('.').reverse())//['2022', '12', '31']
// console.log(data.split('.').reverse().join(', '))//2022, 12, 31
// console.log(new Date(data.split('.').reverse().join(', ')).getTime())//1672434000000
// console.log(new Date(1672434000000))//Sat Dec 31 2022 00:00:00