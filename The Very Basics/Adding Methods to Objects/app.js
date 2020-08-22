const addy = function(a, b) {
	return a + b;
};
adding methods to objects
const mathy = {
	numbas: [ 3, 55, 4, 3, 67, 543, 3333, 37574 ],
	addy: function(a, b) {
		return a + b;
	},
	multiply: function(a, b) {
		return a * b;
	}
};

const getIn = {
	individual: 'Jay',
	open() {
		console.log('You opened the door!');
	},
	close() {
		console.log('You closed the door!');
	}
};
