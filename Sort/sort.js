const prices = [ 500.43, 333.33, 3444.44, 999.99, 22.44, 33.0 ];

const badSort = prices.slice().sort();

const sort1 = prices.slice().sort((a, b) => a - b);

const sort2 = prices.sort((a, b) => b - a);

//const sort3 = prices.sort((a, b) => a - b);

const albums = [
	{
		title: 'The Very Best of Grateful Dead',
		band: [ 'Grateful Dead' ],
		year: 2003,
		genre: [ 'rock', 'country' ]
	},
	{
		title: 'Junta',
		band: [ 'Phish' ],
		year: 1989,
		genre: [ 'psychedelic rock', 'funk' ]
	},
	{
		title: 'Electri Ladyland',
		band: [ 'Jimi Hendrix Experience' ],
		year: 1968,
		genre: [ 'rock', 'psychedelic rock' ]
	},
	{
		title: 'LA Woman',
		band: [ 'The Doors' ],
		year: 1971,
		genre: [ 'rock', 'acid rock' ]
	},
	{
		title: 'Led Zeppelin',
		band: [ 'Led Zeppelin' ],
		year: 1968,
		genre: [ 'rock', 'hard rock' ]
	},
	{
		title: 'T.E.T.I.O.S',
		band: [ 'Pappadosio' ],
		year: 2012,
		genre: [ 'psychedelic rock', 'electronic music' ]
	},
	{
		title: 'Catch a fire',
		band: [ 'Bob Marley and The Wailers' ],
		year: 1973,
		genre: [ 'reggae' ]
	}
];
const sortAlbums1 = albums.sort((a, b) => a.year - b.year);

//const sortAlbums2 = albums.sort((a, b) => b.year - a.year);
