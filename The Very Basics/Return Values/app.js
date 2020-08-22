// function sum(a, b) {
// 	console.log(a + b);
// }

// function divide(a, b) {
// 	console.log(a / b);
// }

 function sum(a, b) {
 	return a + b;
 }

 function divide(a, b) {
 	return a / b;
}

function isWhite(color) {
	if (color.toLowerCase() === 'white') {
		return true;
	}
	return false;
}

function isBlack(color) {
	return color.toLowerCase() === 'black';
}

function containsRed(arr) {
	for (let color of arr) {
		if (color === 'red' || color === 'green') {
			return true;
		}
	}
	return false;
}
