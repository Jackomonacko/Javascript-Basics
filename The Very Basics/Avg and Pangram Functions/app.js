function avg(arr) {
	let total = 0;
	//loop over each number
	for (let num of arr) {
		total += num;
		//add them
	}
	//divide
	return total / arr.length;
}

// function isPangram(sentence) {
// 	let lowaCase = sentence.toLowerCase();
// 	for (let char of 'abcdefghijklmnopqrstuvwxyz') {
// 		if (lowaCase.indexOf(char) === -1) {
// 			return false;
// 		}
// 	}
// 	return true;
// }

function isPangram(sentence) {
	let lowaCase = sentence.toLowerCase();
	for (let char of 'abcdefghijklmnopqrstuvwxyz') {
		if (!lowaCase.includes(char)) {
			return false;
		}
	}
	return true;
}
