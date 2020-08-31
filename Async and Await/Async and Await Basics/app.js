// function greet() {
// 	return 'hello';
// }

async function go() {
	return 'helgolo';
}
go().then((value) => {
	console.log('Promise resolved with: '.value);
});

// async function add(a, b) {
// 	if (typeof a !== 'number' || b !== 'number') {
// 		throw 'A and B must be numbers';
// 	}
// 	return a + b;
// }

function add(a, b) {
	return new Promise((resolve, reject) => {
		if (typeof a !== 'number' || typeof b !== 'number') {
			reject('A and B must be numbers');
		}
		resolve(a + b);
	});
}

add(4, 33)
	.then((value) => {
		console.log('Promise resolved with: ', value);
	})
	.catch((error) => {
		console.log('Promise rejected with: ', error);
	});

add('b', 'a')
	.then((value) => {
		console.log('Promise resolved with: ', value);
	})
	.catch((error) => {
		console.log('Promise rejected with: ', error);
	});

//wait

// function getThePlanets() {
// 	return axios.get('https://swapi.dev/api/planets/');
// }

// getThePlanets().then((res) => {
// 	console.log(res.data);
// });

//can only use await in an async function, do not need extra callback
async function getThePlanets() {
	const response = await axios.get('https://swapi.dev/api/planets/');
	console.log(response.data);
}

getThePlanets();
