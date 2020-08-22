function outer() {
	let book = 'Mutinee on the Bounty';
	function inner() {
		let book = '1984';
		console.log(book.toUpperCase());
	}
	inner();
}

function outer() {
	let book = 'Mutinee on the Bounty';
	function inner() {
		let book = '1984';
		function extraInner() {
			console.log(book.toUpperCase());
		}
		extraInner();
	}
	inner();
}
