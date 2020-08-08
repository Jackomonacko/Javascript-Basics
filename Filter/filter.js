const numbas = [ 1, 2, 3, 4, 5, 6 ];

const isOdd = numbas.filter((n) => n % 2 === 1);
const isEven = numbas.filter((n) => n % 2 === 2);

const bigNumbas = numbas.filter((n) => n >= 4);

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
	}
];

const oldAlbums = albums.filter((a) => a.year <= 1999);

const rockAlbums = albums.filter((g) => g.genre.includes('rock'));

const otherGenre = albums.filter((oG) => oG.genre.includes('psychedelic rock') || oG.genre.includes('acid rock'));

const query = 'Led';
const results = albums.filter((band) => {
	const title = band.title.toLowerCase();
	return title.includes(query.toLowerCase());
});
