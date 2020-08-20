//changing multiple events
const allLis = document.querySelectorAll('li');
for (let x = 0; x < allLis.length; x++) {
	allLis[x].innerText = 'You changed the Lis!';
}

for (let li of allLis) {
	li.innerHTML = 'changed all lis again!';
}

// //change styles
const h1 = document.querySelector('h1');

h1.style;

h1.style.color;

h1.style.color = 'orchid';

const p = document.querySelector('p');

p.style.color = 'white';

p.style.backgroundColor = 'green';

p.style.fontSize = '20px';

const allLiss = document.querySelectorAll('li');
const colors = [ 'red', 'purple', 'blue', 'black', 'orange', 'green' ];

allLiss.forEach((li, i) => {
	const color = colors[i];
	li.style.color = color;
});
