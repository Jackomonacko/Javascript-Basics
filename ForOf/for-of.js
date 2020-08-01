let subs = [ 'meatball', 'chicken finger three way', 'itayin', 'roast beef three way', 'buffalo chicken' ];
for (let i = 0; i < subs.length; i++) {
	console.log(subs[i]);
}

//instead do this!
for (let subbies of subs) {
	console.log(subbies);
}

for (let char of 'Thaddeus') {
	console.log(char.toUpperCase());
}
