function summy() {
	const argsArr = [ ...arguments ];
	return argsArr.reduce((total, currVal) => {
		return total + currVal;
	});
}

function name(first, last) {
	console.log(arguments);
	console.log(first);
}

const multi = () => {
	console.log(arguments);
};
