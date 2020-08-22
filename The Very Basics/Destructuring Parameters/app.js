const actor = {
	first: 'John',
	last: 'Travolta',
	country: 'USA',
	title: 'Lead'
};

// function show(acta) {
// 	const { first, last, title } = actor;
// 	console.log(`${first} ${last}, ${title}`);
// }

function show({ first, last, title }) {
	console.log(`${first} ${last}, ${title}`);
}

const reply = [ 'you say yes', 'i say no', 'you say stop', 'but i say go go go' ];

function beatlesReply([ firstLine, secondLine, thirdLine, lastLine ]) {
	console.log(`First Line:${firstLine}`);
}
