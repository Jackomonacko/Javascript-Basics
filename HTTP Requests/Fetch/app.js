fetch('https://swapi.dev/api/planets/')
	.then((response) => {
		if (!response.ok) throw new Error(`Status code: ${response.status}`);
		console.log(response);
		response.json().then((data) => {
			for (let planets of data.results) {
				//console.log(planet)
				console.log(planets.name);
			}
		});
	})
	.catch((err) => {
		console.log('uh ohh');
		console.log(err);
	});

fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
	.then((response) => {
		console.log(response);
		response.json().then((btcData) => {
			var objecto = btcData.bpi;
			for (let priceData of Object.keys(objecto)) {
				var currency = objecto[priceData];
				console.log(currency.code, currency.description, currency.rate);
			}
		});
	})
	.catch((err) => {
		console.log('uh ohh');
		console.log(err);
	});
