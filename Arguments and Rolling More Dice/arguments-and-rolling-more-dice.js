function rollDaDie() {
	let rolly = Math.floor(Math.random() * 6) + 1;
	console.log(`Rolled number is: ${rolly}`);
}

function throwDaDice(rollies) {
	for (let i = 0; i < rollies; i++) {
		rollDaDie();
	}
}

function open(door) {
	console.log(`You have opened ${door}`);
}
