function divideBy(numba) {
	return function(x) {
		return x / numba;
	};
}

const divideByTwo = divideBy(2);

const divideByThree = divideBy(3);

const multiplyByTwo = divideBy(0.5);

function makeInTheRange(a, b) {
	return function(numba) {
		return numba >= a && numba <= b;
	};
}

const isFather = makeInTheRange(50, 100);

const isFiftyOrOlder = makeInTheRange(1920, 1970);

const isGreatWeather = makeInTheRange(-40, 32);
