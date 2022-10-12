const getData = (callback) => {
	fetch('https://jsonplaceholder.typicode.com/users/1')
		.then((response) => response.json())
		.then((user) => {
			console.log('Success');//2
			callback(user);
		})
		.catch((error) => {
			console.log(error);
		});
}

getData(() => {
	console.log('user received');//3

	const promise = new Promise((resolve) => {
		setTimeout(() => {
			resolve('promise resolved');//6
		}, 500);

		console.log('in promise');//4
		setTimeout(() => {
			console.log('last set timeout');//5
		}, 400);

	});

	promise.then((result) => {
		console.log(result);
	})
});

console.log('End')//1

//End
//Success
//user received
//in promise
//last set timeout
//promise resolved