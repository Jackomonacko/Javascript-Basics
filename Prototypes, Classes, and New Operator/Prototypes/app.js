String.prototype.holla = function() {
	return `yoyoyoyoy ${this.toUpperCase()}! ahh!`;
};

'yooo'.holla();

Array.prototype.pop = function() {
	return 'We will not pop this off!';
};
const numbas = [ 3, 5, 7 ];
numbas.pop();
