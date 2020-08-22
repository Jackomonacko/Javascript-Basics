const bostonGames = [
	{
		awayTeam: {
			team: 'Boston',
			score: 13,
			isWinner: false
		},
		homeTeam: {
			team: 'NYC',
			score: 15,
			isWinner: true
		}
	},
	{
		awayTeam: {
			team: 'Boston',
			score: 15,
			isWinner: true
		},
		homeTeam: {
			team: 'NYC',
			score: 13,
			isWinner: false
		}
	},
	{
		homeTeam: {
			team: 'Boston',
			score: 12,
			isWinner: false
		},
		awayTeam: {
			team: 'NYC',
			score: 15,
			isWinner: true
		}
	},
	{
		homeTeam: {
			team: 'Boston',
			score: 15,
			isWinner: true
		},
		awayTeam: {
			team: 'NYC',
			score: 10,
			isWinner: false
		}
	},
	{
		awayTeam: {
			team: 'Boston',
			score: 15,
			isWinner: true
		},
		homeTeam: {
			team: 'NYC',
			score: 12,
			isWinner: false
		}
	},
	{
		homeTeam: {
			team: 'Boston',
			score: 15,
			isWinner: true
		},
		awayTeam: {
			team: 'NYC',
			score: 11,
			isWinner: false
		}
	},
	{
		awayTeam: {
			team: 'Boston',
			score: 14,
			isWinner: false
		},
		homeTeam: {
			team: 'NYC',
			score: 15,
			isWinner: true
		}
	}
];

const makeChart = (games, teamy) => {
	const ulParent = document.createElement('ul');
	for (let game of games) {
		const gameLi = document.createElement('li');
		gameLi.innerHTML = getScore(game);
		gameLi.classList.add(isWinner(game, teamy) ? 'win' : 'lose');

		ulParent.appendChild(gameLi);
	}
	return ulParent;
};

const isWinner = ({ homeTeam, awayTeam }, teamy) => {
	const target = homeTeam.team === teamy ? homeTeam : awayTeam;
	return target.isWinner;
};

const getScore = ({ homeTeam, awayTeam }) => {
	const { team: hTeam, score: hScore } = homeTeam;
	const { team: aTeam, score: aScore } = awayTeam;
	const teamNames = `${aTeam} @ ${hTeam}`;
	let scoreLine;
	if (aScore > hScore) {
		scoreLine = `<b>${aScore}</b> - ${hScore}`;
	} else {
		scoreLine = `${aScore} - <b>${hScore}</b>`;
	}
	return `${teamNames} ${scoreLine}`;
};

const bosSection = document.querySelector('#bos');
const nycSection = document.querySelector('#nyc');

const bosChart = makeChart(bostonGames, 'Boston');
const nycChart = makeChart(bostonGames, 'NYC');
bosSection.appendChild(bosChart);
nycSection.appendChild(nycChart);
