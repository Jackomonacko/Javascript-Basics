fetch('https://swapi.dev/api/planets/')
	.then((response) => {
		if (!response.ok) throw new Error(`Status code: ${response.status}`);

		return response.json();
	})
	.then((data) => {
		console.log('fetched all planets');
		const fetchFilm = data.results[0].films[0];
		return fetch(fetchFilm);
	})
	.then((response) => {
		if (!response.ok) throw new Error(`Status code: ${response.status}`);
		return response.json();
	})
	.then((data) => {
		console.log(data.title);
	})
	.catch((err) => {
		console.log('uh ohh');
		console.log(err);
	});
