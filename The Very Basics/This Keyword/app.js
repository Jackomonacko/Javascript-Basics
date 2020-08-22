function sayHello() {
	console.log('hello');
	console.log(this);
}

// const greet = function() {
// 	console.log(this);
// };

const person = {
	first: 'Denzel',
	last: 'Washington',
	nickName: 'Alonzo',
	fullName() {
		const { first, last, nickName } = this;
		return `${first} ${last} stars as crooked cop named ${nickName}`;
	},
	showBio() {
		const fullName = this.fullName();
		console.log(`${fullName} in Training Day.`);
	}
};
