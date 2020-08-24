function isTouching(a, b) {
	const aRect = a.getBoundingClientRect();
	const bRect = b.getBoundingClientRect();

	return !(
		aRect.top + aRect.height < bRect.top ||
		aRect.top > bRect.top + bRect.height ||
		aRect.left + aRect.width < bRect.left ||
		aRect.left > bRect.left + bRect.width
	);
}
const init = () => {
	const goof = document.querySelector('#goofy');
	const gold = document.querySelector('#goldy');
	moveGold();
	window.addEventListener('keyup', function(e) {
		if (e.key === 'ArrowDown' || e.key === 'Down') {
			moveDowny(goof, 50);
		} else if (e.key === 'ArrowUp' || e.key === 'Up') {
			moveUppy(goof, -50);
		} else if (e.key === 'ArrowLeft' || e.key === 'Left') {
			moveSideways(goof, -50);
			goof.style.transform = 'scale(-1,1)';
		} else if (e.key === 'ArrowRight' || e.key === 'Right') {
			moveSideways(goof, 50);
			goof.style.transform = 'scale(1,1)';
		}
		if (isTouching(goof, gold)) moveGold();
	});
};

const moveUppy = (element, amount) => {
	const currentTop = extractPos(element.style.top);
	element.style.top = `${currentTop + amount}px`;
	element.style.transform = 'rotate(270deg)';
};

const moveDowny = (element, amount) => {
	const currentTop = extractPos(element.style.top);
	element.style.top = `${currentTop + amount}px`;
	element.style.transform = 'rotate(-270deg)';
};

const moveSideways = (element, amount) => {
	const currentLeft = extractPos(element.style.left);
	element.style.left = `${currentLeft + amount}px`;
};

const extractPos = (pos) => {
	//if (!pos) return parseInt('100px'.slice(0, -2));
	if (!pos) return 100;
	return parseInt(pos.slice(0, -2));
};

const moveGold = () => {
	const x = Math.floor(Math.random() * window.innerWidth);
	const y = Math.floor(Math.random() * window.innerHeight);
	//const gold = document.querySelector('#goldy');
	//could define gold becuase I named it different than it's id
	//then take out the y and type
	//gold.style.top...
	goldy.style.top = `${y}px`;
	goldy.style.left = `${x}px`;
};

init();
