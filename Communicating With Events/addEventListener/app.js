const click1 = document.querySelector('button');

click1.addEventListener('click', function() {
	alert('clicky ticky');
});

click1.addEventListener('click', function() {
	alert('ya clicky ticky thing again!');
});

click1.addEventListener('mouseover', function() {
	click1.innerText = 'changed!';
});

click1.addEventListener('mouseout', function() {
	click1.innerText = 'mouse outty!';
});

const hhh = document.querySelectorAll('h1');

window.addEventListener('scroll', function() {
	console.log('scrolling!');
	for (i = 0; i < hhh.length; i++) {
		hhh[i].innerHTML = 'You scrolled wow!!! Make sure the scroll bar is all the way up at the top!';
	}
});
