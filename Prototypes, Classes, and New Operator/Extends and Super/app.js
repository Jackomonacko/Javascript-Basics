class Pet {
	constructor(name, age) {
		console.log(`In pet constructor`);
		this.namee = name;
		this.age = age;
	}
	eat() {
		return `${this.namee} is eating`;
	}
}

class Dog extends Pet {
	constructor(name, age, timeLeft = 4) {
		console.log(`In dog constructor, ${name}, ${age}, ${timeLeft}`);
		super(name, age);
		this.timeLeft = timeLeft;
	}
	woof() {
		return 'bark wowoooof';
	}
}
class Dog2 extends Pet {
	howl() {
		return 'hoooowwwwwwwwwwwwwwl';
	}
	eat() {
		return `${this.namee} chows down!`;
	}
}
