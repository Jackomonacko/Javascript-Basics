const abbr = 'CMB';
const bigBangTerm = 'Cosmic Microwave Background';

const abbr2 = 'NBH';
const bigBangTerm2 = 'Near Black Hole';

// const term = {};
// term[abbr] = bigBangTerm;
// term[abbr2] = bigBangTerm2;

const term = {
	[abbr]: bigBangTerm,
	[abbr2]: bigBangTerm2,
	[8 * 7]: '56'
};

// function addNewObject(obj, a, b) {
// 	const coppp = {
// 		...obj
// 	};
// 	coppp[a] = b;
// 	return coppp;
// }

// const addNewObject = (object, key, value) => {
// 	return {
// 		...object,
// 		[key]: value
// 	};
// };

const addNewObject = (object, key, value) => ({
	...object,
	[key]: value
});

const result = addNewObject(term, 'WIMP', 'Weakly Interacting Massive Particles');
