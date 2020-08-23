const colors = [ 'green', 'yellow', 'purple', 'orange', 'red', 'blue' ];

const changeCola = function(evt) {
	console.log(evt);
	const h1 = document.querySelector('h1');
	const body = document.querySelector('body');
	h1.style.color = this.style.backgroundColor;
	//body.style.backgroundColor = this.style.backgroundColor;
};

const container = document.querySelector('#colas');
for (let color of colors) {
	const colorBox = document.createElement('div');
	colorBox.style.backgroundColor = color;
	colorBox.classList.add('colorBoxx');
	container.appendChild(colorBox);
	colorBox.addEventListener('click', changeCola);
}

document.body.addEventListener('keypress', function(e) {
	console.log(e);
});
