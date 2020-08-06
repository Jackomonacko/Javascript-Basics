if (true) {
	let fruit = 'mango';
	console.log(fruit);
}
console.log(fruit);

if (true) {
	var fruit = 'mango';
	console.log(fruit);
}
console.log(fruit);

let fruits = [ 'mango', 'pineapple', 'avocado' ];
var i = 10;
for (var i = 0; i < fruits.length; i++) {
	console.log(i, fruits[i]);
}
console.log(i);

let fruits = [ 'mango', 'pineapple', 'avocado' ];
var i = 10;
for (let i = 0; i < fruits.length; i++) {
	console.log(i, fruits[i]);
}
console.log(i);

function dobleFormacion(form) {
	const resultado = [];
	let doble = 0;
	for (let x of form) {
		let doble = x * 2;
		resultado.push(doble);
	}
	console.log(doble);
	return resultado;
}
