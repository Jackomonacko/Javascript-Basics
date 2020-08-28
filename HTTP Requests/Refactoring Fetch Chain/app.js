const checkStatusAndParse = (response) => {
	if (!response.ok) throw new Error(`Status Error: ${response.status}`);
	return response.json();
};

const showPlanets = (data) => {
	console.log('loaded 10 planets');
	for (let planets of data.results) {
		console.log(planets.name);
	}
	return Promise.resolve(data.next);
};

const fetchMo = (url = 'https://swapi.dev/api/planets/') => {
	return fetch(url);
};

fetchMo()
	.then(checkStatusAndParse)
	.then(showPlanets)
	.then(fetchMo)
	.then(checkStatusAndParse)
	.then(showPlanets)
	.then(fetchMo)
	.then(checkStatusAndParse)
	.then(showPlanets)
	.catch((err) => {
		console.log('SOMETHING WENT WRONG WITH FETCH!');
		console.log(err);
	});

const checkStatusAndParseBTC = (response) => {
	if (!response.ok) throw new Error(`Status Error: ${response.status}`);
	//console.log(response.json());
	return response.json();
};

const showBTCData = (data) => {
	console.log('loaded 10 planets');
	var objecto = data.bpi;
	for (let priceData of Object.keys(objecto)) {
		var currency = objecto[priceData];
		//console.log(currency);
		console.log(currency);
	}
	//return Promise.resolve(data.next);
};

const fetchMore = (url = 'https://api.coindesk.com/v1/bpi/currentprice.json') => {
	return fetch(url);
};

fetchMore().then(checkStatusAndParseBTC).then(showBTCData);
