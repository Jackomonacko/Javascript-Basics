const gameBoard = [ [ 6, 32, 8, 4 ], [ 8, 6, 5, 3 ], [ 4, 5, 8, 6 ], [ 3, 32, 8, 1 ] ];
let totalScore = 0;
for (let i = 0; i < gameBoard.length; i++) {
	let row = gameBoard[i];
	for (let j = 0; j < row.length; j++) {
		totalScore += row[j];
		console.log(totalScore);
	}
}
