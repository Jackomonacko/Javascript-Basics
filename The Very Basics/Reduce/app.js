const numbas = [ 4, 5, 6, 7, 8, 9, 10 ];

const productos = numbas.reduce((accumulator, currentValue) => {
	return accumulator * currentValue;
});

const scores = [ 88, 110, 120, 114, 111, 99, 96, 105, 88, 89, 91, 121 ];

// const maxScore = scores.reduce((accumulator, currentValue) => {
// 	if (currentValue > accumulator) return currentValue;
// 	return accumulator;
// });

const maxScore = scores.reduce((accumulator, currentValue) => {
	return Math.max(accumulator, currentValue);
});
const minScore = scores.reduce((accumulator, currentValue) => {
	return Math.min(accumulator, currentValue);
});

const summy = [ 10, 30, 50, 70, 90 ].reduce((accumulator, currentValue) => {
	return accumulator + currentValue;
}, 10);
