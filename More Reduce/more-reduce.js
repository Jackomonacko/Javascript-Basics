const tOrB = [
	't',
	'b',
	't',
	't',
	'b',
	'b',
	'b',
	'b',
	't',
	't',
	't',
	'b',
	't',
	't',
	'b',
	't',
	'b',
	't',
	't',
	't',
	't',
	'b',
	't',
	't',
	'b',
	't',
	't',
	'b',
	'b',
	'b',
	'b',
	'b',
	'b',
	'b'
];

// const voteCount = tOrB.reduce((count, currentValue) => {
// 	if (count[currentValue]) {
// 		count[currentValue]++;
// 	} else {
// 		count[currentValue] = 1;
// 	}
// 	return count;
// }, {});

const voteCount = tOrB.reduce((count, currentValue) => {
	count[currentValue] = (count[currentValue] || 0) + 1;
	return count;
}, {});

const albums = [
	{
		title: 'The Very Best of Grateful Dead',
		band: [ 'Grateful Dead' ],
		year: 2003,
		genre: [ 'rock', 'country' ],
		rating: 4.7
	},
	{
		title: 'Junta',
		band: [ 'Phish' ],
		year: 1989,
		genre: [ 'psychedelic rock', 'funk' ],
		rating: 4.99
	},
	{
		title: 'Electri Ladyland',
		band: [ 'Jimi Hendrix Experience' ],
		year: 1968,
		genre: [ 'rock', 'psychedelic rock' ],
		rating: 4.6
	},
	{
		title: 'LA Woman',
		band: [ 'The Doors' ],
		year: 1971,
		genre: [ 'rock', 'acid rock' ],
		rating: 4.8
	},
	{
		title: 'Led Zeppelin',
		band: [ 'Led Zeppelin' ],
		year: 1968,
		genre: [ 'rock', 'hard rock' ],
		rating: 4.4
	},
	{
		title: 'T.E.T.I.O.S',
		band: [ 'Pappadosio' ],
		year: 2012,
		genre: [ 'psychedelic rock', 'electronic music' ],
		rating: 3.8
	},
	{
		title: 'Catch a fire',
		band: [ 'Bob Marley and The Wailers' ],
		year: 1973,
		genre: [ 'reggae' ],
		rating: 4.1
	},
	{
		title: 'Terrible Album',
		band: [ 'The Terrible Album Group' ],
		year: 2020,
		genre: [ 'terrible' ],
		rating: 0.5
	}
];

const groupedRatings = albums.reduce((accumulator, currentValue) => {
	const albumRating = Math.floor(currentValue.rating);
	if (!accumulator[albumRating]) accumulator[albumRating] = [];
	accumulator[albumRating].push(currentValue);
	return accumulator;
}, {});
