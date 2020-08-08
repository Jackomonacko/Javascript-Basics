const texts = [ 'mayan', 'inca', 'aztec' ];
const capitalize = texts.map(function(a) {
	return a.toUpperCase();
});
texts;
capitalize;

const numbas = [ 2, 4, 6, 8, 10, 12, 14, 16, 18 ];

const doubles = numbas.map(function(num) {
	return num * 2;
});

const numbasss = [ 0, 1, 1, 2, 3, 5, 8, 13, 21 ];
const nummy = numbasss.map(function(n) {
	return {
		value: n,
		isEven: n % 2 === 0
	};
});

// const doubles2 = [];
// for (let num of numbas) {
// 	doubles2.push(num * 2);
// }

const terms = [ 'abstemious', 'zeitgeber', 'phosphorylation', 'phosphoproteomics' ];
const dashWords = terms.map(function(term) {
	return term.toUpperCase().split('').join('-');
});

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

const getTitle = albums.map(function(a) {
	return a.title;
});
