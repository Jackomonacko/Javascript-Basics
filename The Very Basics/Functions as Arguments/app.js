function callFiveTimes(f) {
	f();
	f();
	f();
	f();
	f();
}
function giggle() {
	console.log("ha ha ha i'm so glad!");
}

function anger() {
	console.log("ha ha ha i'm so mad!");
}

function callXTimes(action, num) {
	for (let i = 0; i < num; i++) {
		action();
	}
}

//callXTimes(anger, 666);

function pickANumba(a1, a2) {
	let rando = Math.random();
	console.log(rando);
	if (rando < 0.5) {
		a1();
	} else {
		a2();
	}
