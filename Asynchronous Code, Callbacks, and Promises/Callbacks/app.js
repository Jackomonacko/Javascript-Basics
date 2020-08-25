const repeat = (str, times) => {
	let result = '';
	for (let i = 0; i < times; i++) {
		result += str;
	}
	return result;
};

const holla = (str) => {
	return str.toUpperCase() + '!?!?';
};

const getWords = (words) => {
	let word = holla(words);
	let repeatedWords = repeat(word, 100);
	return repeatedWords;
};

const makeWords = (words, element) => {
	const h2 = document.createElement('h2');
	h2.innerText = getWords(words);
	element.appendChild(h2);
};

makeWords('I like seafood', document.body);
