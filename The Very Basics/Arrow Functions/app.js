// const square = (x) => {
// 	return x * x;
// };

const isEven = (num) => {
	return num % 2 === 0;
};

const multiply = (a, b) => {
	return a * b;
};

const greet = () => {
	console.log('hello');
};

const square = (n) => n * n;

const numbasss = [ 0, 1, 1, 2, 3, 5, 8, 13, 21 ];

const doubles1 = numbasss.map(function(n) {
	return n * 2;
});

const doubles2 = numbasss.map((n) => {
	return n * 2;
});

const doubles3 = numbasss.map((n) => n * 2);

const evenOdd = numbasss.map(function(n) {
	if (n % 2 === 0) return 'even';
	return 'odd';
});

const evenOdd2 = numbasss.map((n) => {
	if (n % 2 === 0) return 'even';
	return 'odd';
});

const evenOdd3 = numbasss.map((n) => (n % 2 === 0 ? 'even' : 'odd'));
