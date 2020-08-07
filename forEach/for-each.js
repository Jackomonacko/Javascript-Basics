const numbas = [ 4, 3, 6, 7, 8, 999, 777, 44, 3, 3, 2 ];

numbas.forEach(function(numb, idx) {
	console.log(idx, numb);
});

numbas.forEach(function(num) {
	console.log(num * 2);
});

function printQuadruple(n) {
	console.log(n * 4);
}

numbas.forEach(printQuadruple);

const fruit = [
	{
		color: 'yellow',
		name: [ 'banana' ],
		country: 'India'
	},
	{
		color: 'green',
		name: [ 'pineapple' ],
		country: 'Costa Rica'
	},
	{
		color: 'green',
		name: [ 'mango' ],
		country: 'Brazil'
	}
];

fruit.forEach(function(fruits) {
	console.log(fruits.color.toUpperCase());
});

for (let fruits of fruit) {
	console.log(fruits.color.toUpperCase());
}

for (let i = 0; i < fruit.length; i++) {
	console.log(fruit[i].color.toUpperCase());
}
