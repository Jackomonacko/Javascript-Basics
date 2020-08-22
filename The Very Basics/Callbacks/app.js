function fungus() {
	alert('yoyoyo');
}

setTimeout(fungus, 9000);

setTimeout(function() {
	alert('yoyoyo');
}, 3000);

const btn = document.querySelector('button');
btn.addEventListener('click', function() {
	alert('Why you do that?');
});
