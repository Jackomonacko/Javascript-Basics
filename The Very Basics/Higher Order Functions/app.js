function add(a, b) {
	return a + b;
}

const subtract = function(a, b) {
	return a - b;
};

function multiply(a, b) {
	return a * b;
}

const divide = function(a, b) {
	return a / b;
};

const operations = [ add, subtract, multiply, divide ];

for (let phunkyyy of operations) {
	let resultado = phunkyyy(666, 333);
	console.log(resultado);
}

const ting = {
	doSumtin: multiply
};
