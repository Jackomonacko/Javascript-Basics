const firstReq = new XMLHttpRequest();
firstReq.addEventListener('load', function() {
	console.log('it worked');
	const btcData = JSON.parse(this.responseText);
	//console.log(btcData.bpi);
	var objecto = btcData.bpi;
	console.log(objecto);

	for (let priceData of Object.keys(objecto)) {
		var currency = objecto[priceData];
		console.log(currency.code, currency.description, currency.rate);
		//console.log(priceData);
		//console.log(currency.rate);
		//console.log(priceData, currency.rate);
		//console.log(currency);
	}
});
// 	var objecto = btcData.bpi.USD;
// 	console.log(objecto);

// 	for (let usdData of Object.keys(objecto)) {
// 		var us = objecto[usdData];
// 		//console.log(currency.code, currency.rate);
// 		//console.log(priceData);
// 		console.log(us);
// 	}
// });
firstReq.addEventListener('error', () => {
	console.log('it didn;t work');
});
//firstReq.open('GET', 'https://blockchain.info/tobtc?currency=USD&value=10000');
firstReq.open('GET', 'https://api.coindesk.com/v1/bpi/currentprice.json');
firstReq.send();
console.log('request sent');
