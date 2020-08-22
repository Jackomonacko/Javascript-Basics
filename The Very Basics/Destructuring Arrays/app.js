const actors = [
	'Al Pacino',
	'Steven Seagel',
	'Rob Schneider',
	'Chazz Palminteri',
	'John Travolta',
	'Joe Pesci',
	'Mel Gibson',
	'Denzel Washington'
];

// const best = actors[5];
// const ok = actors[0];
// const worse = actors[7];

const [ best, ok, worse ] = actors;

const [ first, , , fourth ] = actors;

const [ allTimeBest, ...others ] = actors;
