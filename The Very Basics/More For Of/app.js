const magicalNumbers = [ [ 3, 6, 9 ], [ 6, 4, 2 ], [ 9, 7, 8 ] ];

for (let i = 0; i < magicalNumbers.length; i++) {
	let row = magicalNumbers[i];
	console.log(row);
	sum = 0;
	for (let j = 0; j < row.length; j++) {
		console.log(row[j]);
		sum += row[j];
	}
	console.log(`${row} summed to ${sum}`);
}

//instead to this!
for (let row of magicalNumbers) {
	let sum = 0;
	for (let num of row) {
		sum += num;
	}
	console.log(`${row} summed to ${sum}!`);
}

for (let row of magicalNumbers) {
	for (let num of row) {
		console.log(num);
	}
}

const dog1 = [ 'blonde', 'black', 'fuzzy' ];
const dog2 = [ 'cockapoo', 'lab', 'hairy' ];

for (let i = 0; i < dog1.length; i++) {
	console.log(`${dog1[i]} ${dog2[i]}`);
}
