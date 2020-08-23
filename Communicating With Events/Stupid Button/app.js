const btn = document.querySelector('button');

btn.addEventListener('mouseover', function() {
	console.log('Mouse Over Me!');
	const height = Math.floor(Math.random() * window.innerHeight);
	const width = Math.floor(Math.random() * window.innerWidth);
	btn.style.top = `${height}px`;
	btn.style.left = `${width}px`;
});

btn.addEventListener('click', function() {
	btn.innerText = 'Finally you clicked it!';
	document.body.style.backgroundColor = '#33ECFF';
});
