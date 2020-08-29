axios.get();

axios
	.get('https://swapi.dev/api/planets/')
	.then((response) => {
		console.log(response.data);
	})
	.catch((error) => {
		console.log('Catch callback');
		console.log(error);
	});

axios
	.get('https://swapi.dev/api/planetsss/') 
	.then((response) => {
		console.log(response.data);
	})
	.catch((error) => {
		console.log('Catch callback');
		console.log(error);
	});

//////////////chaining

const fetchPlanets = (url = 'https://swapi.dev/api/planets/?page=1') => {
	console.log(url);
	return axios.get(url);
};
const showPlanets = ({ data }) => {
	console.log(data);
	for (let planets of data.results) {
		console.log(planets.name);
	}
	//value of data.next is passed into the next .then callback, which is a URL
	//next .then(fetchplanets) will use the new url
	return Promise.resolve(data.next);
};

fetchPlanets()
	.then(showPlanets)
	.then(fetchPlanets)
	.then(showPlanets)
	.then(fetchPlanets)
	.then(showPlanets)
	.catch((error) => {
		console.log('Error', error);
	});
