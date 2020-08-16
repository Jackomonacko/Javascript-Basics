const person = {
	first: 'Denzel',
	last: 'Washington',
	nickName: 'Alonzo',
	fullName() {
		const { first, last, nickName } = this;
		return `${first} ${last} stars as crooked cop named ${nickName}`;
	},
	showBio() {
		console.log(this);
		const fullName = this.fullName();
		console.log(`${fullName} in Training Day.`);
	},
	demand: () => {
		console.log(this);
		console.log(`${this.nickName} says SMOKE IT!`);
	}
};

const showBio = person.showBio;
