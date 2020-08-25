const privateKey = document.querySelector('#pk');
const checkBox = document.querySelector('#checky');
const statey = document.querySelector('#state');

const formInfo = {};

for (let input of [ privateKey, checkBox, statey ]) {
	input.addEventListener('input', ({ target }) => {
		const { name, type, value, checked } = target;
		formInfo[name] = type === 'checkbox' ? checked : value;
		console.log(formInfo);
	});
}
