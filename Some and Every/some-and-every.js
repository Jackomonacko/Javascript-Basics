const terms = [ 'cat', 'dog', 'gun', 'bun', 'son', 'mommy' ];

const allThreeTerms = terms.every((word) => word.length === 3);
const allWordsEndInN = terms.every((word) => {
	const last = word.length - 1;
	return word[last] === 'n';
});

const someStartWithM = terms.some((term) => term[0] === 'm');
const allStartWithM = terms.every((term) => term[0] === 'm');

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

const albumsAfter2000 = albums.every((album) => album.year > 2000);

const oneGenre = albums.some((album) => album.genre.length === 1);
