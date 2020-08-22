// //USING OBJECTS AND METHODS
// const myDeck = {
// 	deck: [],
// 	suits: [ 'Clubs', 'Diamonds', 'Hearts', 'Spades' ],
// 	values: '2,3,4,5,6,7,8,9,10,J,Q,K,A',
// 	drawnCards: [],
// 	makeNewDeck() {
// 		const { suits, values, deck } = this;
// 		for (let value of values.split(',')) {
// 			for (let suit of suits) {
// 				deck.push({
// 					value,
// 					suit
// 				});
// 			}
// 		}
// 		return deck;
// 	},
// 	drawCard() {
// 		const card = this.deck.pop();
// 		this.drawnCards.push(card);
// 		return card;
// 	},
// 	drawMoreThan1(numCards) {
// 		const cards = [];
// 		for (let i = 0; i < numCards; i++) {
// 			cards.push(this.drawCard());
// 		}
// 		return cards;
// 	},
// 	shuffle() {
// 		const { deck } = this;
// 		for (let x = deck.length - 1; x > 0; x--) {
// 			let y = Math.floor(Math.random() * (x + 1));
// 			[ deck[x], deck[y] ] = [ deck[y], deck[x] ];
// 		}
// 	}
// };

// myDeck.makeNewDeck();
// myDeck.shuffle();
// const h1 = myDeck.drawMoreThan1(2);
// const h2 = myDeck.drawMoreThan1(2);
// const h3 = myDeck.drawMoreThan1(5);

//USING FUNCTIONS
// function makeNewDeck() {
// 	const deck = [];
// 	const suits = [ 'Clubs', 'Diamonds', 'Hearts', 'Spades' ];
// 	const values = '2,3,4,5,6,7,8,9,10,J,Q,K,A';
// 	for (let value of values.split(',')) {
// 		for (let suit of suits) {
// 			deck.push({
// 				value,
// 				suit
// 			});
// 		}
// 	}
// 	return deck;
// }

// function drawCard(deck, drawnCards) {
// 	const card = deck.pop();
// 	drawnCards.push(card);
// 	return card;
// }

// function drawMoreThan1(numCards, deck, drawnCards) {
// 	const cards = [];
// 	for (let i = 0; i < numCards; i++) {
// 		cards.push(drawCard(deck, drawnCards));
// 	}
// 	return cards;
// }

// function shuffle(deck) {
// 	// loop over array backwards
// 	for (let i = deck.length - 1; i > 0; i--) {
// 		//pick random index before current element
// 		let y = Math.floor(Math.random() * (i + 1));
// 		//swap
// 		[ deck[i], deck[y] ] = [ deck[y], deck[i] ];
// 	}
// 	return deck;
// }

// const theNewDeck = makeNewDeck();
// const drawnCards = [];
// shuffle(theNewDeck);

// const hand1 = drawMoreThan1(2, theNewDeck, drawnCards);
// const hand2 = drawMoreThan1(2, theNewDeck, drawnCards);
// const holdEm = drawMoreThan1(5, theNewDeck, drawnCards);

//USING OBJECTS AND METHODS
const makeDecky = () => {
	return {
		deck: [],
		suits: [ 'Clubs', 'Diamonds', 'Hearts', 'Spades' ],
		values: '2,3,4,5,6,7,8,9,10,J,Q,K,A',
		drawnCards: [],
		makeNewDeck() {
			const { suits, values, deck } = this;
			for (let value of values.split(',')) {
				for (let suit of suits) {
					deck.push({
						value,
						suit
					});
				}
			}
			return deck;
		},
		drawCard() {
			const card = this.deck.pop();
			this.drawnCards.push(card);
			return card;
		},
		drawMoreThan1(numCards) {
			const cards = [];
			for (let i = 0; i < numCards; i++) {
				cards.push(this.drawCard());
			}
			return cards;
		},
		shuffle() {
			const { deck } = this;
			for (let x = deck.length - 1; x > 0; x--) {
				let y = Math.floor(Math.random() * (x + 1));
				[ deck[x], deck[y] ] = [ deck[y], deck[x] ];
			}
		}
	};
};

const myDeck = makeDecky();

myDeck.makeNewDeck();
myDeck.shuffle();
const h1 = myDeck.drawMoreThan1(2);
const h2 = myDeck.drawMoreThan1(2);
const h3 = myDeck.drawMoreThan1(5);
