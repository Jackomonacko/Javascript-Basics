//sequential requests
// async function getThreeTicketPages() {
// 	const tickets1 = await axios.get(
// 		'https://app.ticketmaster.com/discovery/v2/events.json?apikey=udut4kVMapINsF6mq03NXltGYDOHkSSJ&size=1'
// 	);
// 	const tickets2 = await axios.get(
// 		'https://app.ticketmaster.com/discovery/v2/events.json?apikey=udut4kVMapINsF6mq03NXltGYDOHkSSJ&size=2'
// 	);
// 	const tickets3 = await axios.get(
// 		'https://app.ticketmaster.com/discovery/v2/events.json?apikey=udut4kVMapINsF6mq03NXltGYDOHkSSJ&size=3'
// 	);
// 	console.log(tickets1.data._embedded);
// 	console.log(tickets2.data._embedded);
// 	console.log(tickets3.data._embedded);
// }
// getThreeTicketPages();

//in parallel
async function getThreeTicketPages() {
	const promise1 = axios.get(
		'https://app.ticketmaster.com/discovery/v2/events.json?apikey=udut4kVMapINsF6mq03NXltGYDOHkSSJ&page=0'
	);
	const promise2 = axios.get(
		'https://app.ticketmaster.com/discovery/v2/events.json?apikey=udut4kVMapINsF6mq03NXltGYDOHkSSJ&page=1'
	);
	const promise3 = axios.get(
		'https://app.ticketmaster.com/discovery/v2/events.json?apikey=udut4kVMapINsF6mq03NXltGYDOHkSSJ&page=2'
	);
	console.log(promise1);
	const tickets1 = await promise1;
	const tickets2 = await promise2;
	const tickets3 = await promise3;
	console.log(tickets1.data);
	console.log(tickets2.data);
	console.log(tickets3.data);
}
getThreeTicketPages();

function changeColor(color, delay) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			document.body.style.backgroundColor = color;
			resolve();
		}, delay);
	});
}

async function lighty() {
	const c1 = await changeColor('green', 1000);
	const c2 = await changeColor('black', 1000);
	const c3 = await changeColor('green', 1000);
	const c4 = await changeColor('purple', 1000);
	const c5 = await changeColor('green', 1000);
	const c6 = await changeColor('yellow', 1000);
}

// async function lighty() {
// 	const c1 = changeColor('green', 1000);
// 	const c2 = changeColor('black', 1000);
// 	const c3 = changeColor('green', 1000);
// 	const c4 = changeColor('purple', 1000);
// 	await c1;
// 	await c2;
// 	await c3;
// 	await c4;
// }

lighty();

// async function getThreeTicketPages() {
// 	const promise1 = axios.get(
// 		'https://app.ticketmaster.com/discovery/v2/events.json?apikey=udut4kVMapINsF6mq03NXltGYDOHkSSJ&page=0'
// 	);
// 	const promise2 = axios.get(
// 		'https://app.ticketmaster.com/discovery/v2/events.json?apikey=udut4kVMapINsF6mq03NXltGYDOHkSSJ&page=1'
// 	);
// 	const promise3 = axios.get(
// 		'https://app.ticketmaster.com/discovery/v2/events.json?apikey=udut4kVMapINsF6mq03NXltGYDOHkSSJ&page=2'
// 	);
// 	const results = await Promise.all([ promise1.data, promise2.data, promise3.data ]);
// 	//console.log(results);
// 	showIt(results);
// }
// function showIt(results) {
// 	for (let show of results) {
// 		console.log(results);
// 	}
// }
// getThreeTicketPages();

async function getThreeTicketPages() {
	const promise1 = axios.get(
		'https://app.ticketmaster.com/discovery/v2/events.json?apikey=udut4kVMapINsF6mq03NXltGYDOHkSSJ&page=0'
	);
	const promise2 = axios.get(
		'https://app.ticketmaster.com/discovery/v2/events.json?apikey=udut4kVMapINsF6mq03NXltGYDOHkSSJ&page=1'
	);
	const promise3 = axios.get(
		'https://app.ticketmaster.com/discovery/v2/events.json?apikey=udut4kVMapINsF6mq03NXltGYDOHkSSJ&page=2'
	);
	const results = await Promise.all([ promise1, promise2, promise3 ]);
	//console.log(results);
	//showIt(results);

	for (let i = 0; i < results.length; i++) {
		console.log(results[i].data._embedded.events);
	}
}

// function showIt(results) {
// 	for (let show of results) {
// 		console.log(results);
// 	}
// }
getThreeTicketPages();
