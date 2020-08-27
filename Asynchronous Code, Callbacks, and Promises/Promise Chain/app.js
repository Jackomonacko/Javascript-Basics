//fake http request
const fakeReq = (url) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const pages = {
				'/users': [ { id: 1, username: 'Jacko' }, { id: 5, username: 'Jake' } ],
				'/users/1': {
					id: 1,
					username: 'Jacko',
					upvotes: 400,
					city: 'Ipswich',
					topPostId: 45321
				},
				'/users/5': {
					id: 1,
					username: 'Jake',
					upvotes: 4400,
					city: 'Raymond',
					topPostId: 900
				},
				'/posts/45321': {
					id: 45321,
					title: 'This is a title!'
				},
				'/about': 'About Page!'
			};
			const data = pages[url];
			if (data) {
				resolve({ status: 200, data });
			} else {
				reject({ status: 404, data });
			}
		}, 1000);
	});
};

fakeReq('/users')
	.then((res) => {
		console.log(res);
		const id = res.data[0].id;
		return fakeReq(`/users/${id}`);
	})
	.then((res) => {
		console.log(res);
		const postId = res.data.topPostId;
		return fakeReq(`/podfdsts/${postId}`);
	})
	.then((res) => {
		console.log(res);
	})
	.catch((err) => {
		console.log('oh noo');
	});
