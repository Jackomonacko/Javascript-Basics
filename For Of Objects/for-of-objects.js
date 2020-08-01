const bookReviews = {
	'1984': 10,
	'Tibetan Book of the Dead': 10,
	'The Body Electric': 9,
	Earthing: 7,
	'Lights Out': 10
};

for (let book of Object.keys(bookReviews)) {
	console.log(book, bookReviews[book]);
}

const ratings = Object.values(bookReviews);
let total = 0;
for (let r of ratings) {
	total += r;
}
let avg = total / ratings.length;
console.log(avg);
