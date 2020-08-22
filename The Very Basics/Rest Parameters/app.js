function summy(...nums) {
	return nums.reduce((accumulator, currentValue) => {
		return accumulator + currentValue;
	});
}

function name(first, last, ...names) {
	console.log('first', first);
	console.log('last', last);
	console.log('names', names);
}

const multi = (...nummy) => nummy.reduce((accumulator, currentValue) => accumulator * currentValue);
