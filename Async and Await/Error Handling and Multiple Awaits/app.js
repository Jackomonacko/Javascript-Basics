const btn = document.querySelector('button');

const moveIt = (element, amount, delay) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const widthy = document.body.clientWidth;
			const rightEl = element.getBoundingClientRect().right;
			const currentLeft = element.getBoundingClientRect().left;
			if (rightEl + amount > widthy) {
				reject({ widthy, rightEl, amount });
			} else {
				element.style.transform = `translateX(${currentLeft + amount}px)`;
				resolve();
			}
		}, delay);
	});
};

async function toDaRight(ely, amt) {
	await moveIt(ely, amt, 1000);
	await moveIt(ely, amt, 1000);
	await moveIt(ely, amt, 1000);
	await moveIt(ely, amt, 1000);
	await moveIt(ely, amt, 1000);
	await moveIt(ely, amt, 1000);
	await moveIt(ely, amt, 1000);
	await moveIt(ely, amt, 1000);
	await moveIt(ely, amt, 1000);
	await moveIt(ely, amt, 1000);
	await moveIt(ely, amt, 1000);
	moveIt(ely, amt, 1000);
}

toDaRight(btn, 100).catch((error) => {
	console.log('all done');
	toDaRight(btn, -100);
});
