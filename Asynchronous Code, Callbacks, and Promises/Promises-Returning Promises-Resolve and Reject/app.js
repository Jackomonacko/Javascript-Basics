const fakeReq = (url) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const pages = {
				'/users': [ { id: 1, username: 'Jacko' }, { id: 5, username: 'Jake' } ],
				'/about': 'About Page!'
			};
			const data = pages[url];
			if (data) {
				resolve({ status: 200, data });
			} else {
				reject({ status: 404, data });
			}
		}, 2000);
	});
};

fakeReq('/dogs')
	.then((res) => {
		console.log('status code', res.status);
		console.log('Status code!', res.data);
	})
	.catch((res) => {
		console.log(res.status);
		console.log('request failed');
	});

// const makeDefendPromise = () => {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			const rando = Math.random();
// 			if (rando > 0.8) {
// 				reject();
// 			} else {
// 				resolve();
// 			}
// 			console.log(rando);
// 		}, 5000);
// 	});
// };
// makeDefendPromise()
// 	.then(() => {
// 		console.log('will defend you');S
// 	.catch(() => {
// 		console.log('will not defend you');
// 	});

// const defendPromise = new Promise((resolve, reject) => {
// 	const rando = Math.random();
// 	if (rando > 0.8) {
// 		reject();
// 	} else {
// 		resolve();
// 	}
// 	console.log(rando);
// });

// defendPromise.then(() => {
// 	console.log('will defend you');
// });
// defendPromise.catch(() => {
// 	console.log('will not defend you');
// });
