// function pickACard() {
// 	const values = [ '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A' ];
// 	const index = Math.floor(Math.random() * values.length);
// 	const value = values[index];

// 	const suits = [ 'Clubs', 'Diamonds', 'Hearts', 'Spades' ];
// 	const suitIndex = Math.floor(Math.random() * suits.length);
// 	const suit = suits[suitIndex];
// 	return { value, value, suit: suit };
// }

// function pick(arr) {
// 	const index = Math.floor(Math.random() * arr.length);
// 	return arr[index];
// }

// function pickACard() {
// 	const values = [ '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A' ];
// 	const value = pick(values);
// 	const suits = [ 'Clubs', 'Diamonds', 'Hearts', 'Spades' ];
// 	const suit = pick(suits);
// 	return { value, value, suit: suit };
// }

function pick(arr) {
	const index = Math.floor(Math.random() * arr.length);
	return arr[index];
}

function pickACard() {
	const values = [ '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A' ];
	const suits = [ 'Clubs', 'Diamonds', 'Hearts', 'Spades' ];
	return { value: pick(values), suit: pick('suits') };
}
