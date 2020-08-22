const animalNoises = {
	noises: [ 'woof', 'meow', 'purr', 'roar' ],
	pickNoise() {
		const { noises } = this;
		const idx = Math.floor(Math.random() * noises.length);
		return noises[idx];
	},
	start() {
		this.stopId = setInterval(() => {
			console.log(this.pickNoise());
		}, 5000);
	},
	stop() {
		clearInterval(this.stopId);
		console.log('This has stopped!');
	}
};
