document.createElement('h2');

const newh2 = document.createElement('h2');

console.dir(newh2);

newh2.innerText = 'This is a new h2!';

newh2;

newh2.classList.add('special');

newh2;

const section = document.querySelector('section');

section.appendChild(newh2);

const newImg = document.createElement('img');

console.dir(newImg);
newImg.src =
	'https://images.unsplash.com/photo-1597007755747-9cbc8f87e8f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1533&q=80';

document.body.appendChild(newImg);

newImg.style.width = '250px';

const newLink = document.createElement('a');
newLink.innerText = 'Shadowgate!!!';
newLink.href = 'https://www.bitchute.com/video/1fxvKcGA3xyq/';

firstP = document.querySelector('p');
firstP.appendChild(newLink);
