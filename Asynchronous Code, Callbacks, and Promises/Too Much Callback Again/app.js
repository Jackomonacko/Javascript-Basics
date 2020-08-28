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

moveIt(btn, 300, 1000)
	.then(() => moveIt(btn, 300, 1000))
	.then(() => moveIt(btn, 300, 1000))
	.then(() => moveIt(btn, 300, 1000))
	.then(() => moveIt(btn, 300, 1000))
	.then(() => moveIt(btn, 300, 1000))
	.then(() => moveIt(btn, 300, 1000))
	.then(() => moveIt(btn, 300, 1000))
	.then(() => moveIt(btn, 300, 1000))
	.then(() => moveIt(btn, 300, 1000))
	.then(() => moveIt(btn, 300, 1000))
	.catch(({ widthy, amount, rightEl }) => {
		console.log(`Body is at ${widthy}px`);
		console.log(console.log(`element is at ${rightEl}px, ${amount}px is too large`));
	});
