// const getDaNumbas = (arroyo) => {
// 	const max = Math.max(...arroyo);
// 	const min = Math.min(...arroyo);
// 	const summy = arroyo.reduce((summ, x) => summ + x);
// 	const avg = summy / arroyo.length;
// 	return {
// 		max: max,
// 		min: min,
// 		sum: summy,
// 		average: avg
// 	};
// };

// const reviews = [ 3.9, 4.9, 5.0, 3.0, 2.3, 1.2, 5.0, 0.5 ];

// const stats = getDaNumbas(reviews);

const getDaNumbas = (arroyo) => {
	const max = Math.max(...arroyo);
	const min = Math.min(...arroyo);
	const summy = arroyo.reduce((summ, x) => summ + x);
	const avg = summy / arroyo.length;
	return {
		max,
		min,
		summy,
		avg
	};
};

const reviews = [ 3.9, 4.9, 5.0, 3.0, 2.3, 1.2, 5.0, 0.5 ];

const stats = getDaNumbas(reviews);

function pickCardNumber(arroyo) {
	const num = Math.floor(Math.random() * arroyo.length);
	return arroyo[num];
}

function getDaCard() {
	const value = [ '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A' ];
	const suit = [ 'clubbies', 'diamonds', 'hearties', 'spades' ];
	const values = pickCardNumber(value);
	const suits = pickCardNumber(suit);
	return {
		values,
		suits
	};
}
