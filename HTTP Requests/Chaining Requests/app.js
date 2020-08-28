const firstReq = new XMLHttpRequest();
firstReq.addEventListener('load', function() {
	console.log('First request worked');
	const swData = JSON.parse(this.responseText);
	const otherURL = swData.results[0].films[0];
	const swRequest = new XMLHttpRequest();
	swRequest.addEventListener('load', function() {
		console.log('second request worked');
		const movieData = JSON.parse(this.responseText);
		console.log(movieData);
	});
	swRequest.addEventListener('error', () => {
		console.log('Error', e);
	});
	swRequest.open('GET', otherURL);
	swRequest.send();
	// for (let planet of data.results) {
	// 	console.log(planet.name);
	// }
});
firstReq.addEventListener('error', (e) => {
	console.log('Error');
});
firstReq.open('GET', 'https://swapi.dev/api/planets/');
firstReq.send();
console.log('Request Sent!');
