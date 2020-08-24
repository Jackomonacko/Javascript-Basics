const form = document.querySelector('#signup-form');

const privateKey = document.querySelector('#pk');
const checkBox = document.querySelector('#checky');
const statey = document.querySelector('#state');

form.addEventListener('submit', function(e) {
	e.preventDefault();
	alert('form submitted');
	console.log('pk', privateKey.value);
	console.log('checky', checkBox.value);
	console.log('state', statey.value);
});
