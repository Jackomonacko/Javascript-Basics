const actor = {
	first: 'John',
	last: 'Travolta',
	country: 'USA',
	title: 'Lead'
};

// const { first, last, nickname } = actor;

const { country: origin, title: best } = actor;

const { first, last, ...restyOther } = actor;

//nested

// const actors = [
// 	{
// 		first: 'John',
// 		last: 'Travolta',
// 		country: 'USA',
// 		title: 'Lead'
// 	},
// 	{
// 		first: 'Burt',
// 		last: 'Reynolds',
// 		country: 'USA',
// 		title: 'Lead'
// 	},
// 	{
// 		first: 'Jon',
// 		last: 'Voight',
// 		country: 'USA',
// 		title: 'Lead'
// 	}
// ];

// const [ { first: Johnny }, { last } ] = actors;
