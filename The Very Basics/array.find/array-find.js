  let movies = [ 'The Patriot', 'The Bounty', 'Gallipoli', 'Get the Gringo', 'Hacksaw Ridge' ];

const movie = movies.find((movie) => {
	return movie.includes('The');
});

const movie2 = movies.find((m) => m.indexOf('The') === 0);

const albums = [
	{
		title: 'The Very Best of Grateful Dead',
		band: [ 'Grateful Dead' ],
		year: 2003
	},
	{
		title: 'Junta',
		band: [ 'Phish' ],
		year: 1989
	},
	{
		title: 'Electri Ladyland',
		band: [ 'Jimi Hendrix Experience' ],
		year: 1968
	}
];

const after2000 = albums.find((a) => a.year >= 2000);

const jimiAlbum = albums.find((b) => b.band.includes('Jimi Hendrix Experience'));
