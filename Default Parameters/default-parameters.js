// function multiply(a, b) {
// 	if (typeof b === 'undefined') {
// 		b = 1;
// 	}
// 	return a * b;
// }

// function multiply(a, b) {
// 	b = typeof b === 'undefined' ? 1 : b;
// 	return a * b;
// }

function multiply(a, b = 1) {
	return a * b;
}

// const helloGoodbye = (person, salutation = 'hello') => {
// 	console.log(`${salutation},${person}`);
// };

const blah = (x, y = [ 1, 2, 3 ]) => {
	console.log(x, y);
};

const helloGoodbye = (person, salutation = 'hello', punctuation = '!') => {
	console.log(`${salutation},${person} ${punctuation}`);
};
