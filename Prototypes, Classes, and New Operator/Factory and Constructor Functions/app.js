function colorMaker(r, g, b) {
	const color = {};
	color.r = r;
	color.g = g;
	color.b = b;
	color.rgb = function() {
		const { r, g, b } = this;
		return `rgb(${r},${g},${b})`;
	};
	color.hex = function() {
		const { r, g, b } = this;
		return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
	};
	return color;
}

const firstColor = colorMaker(44, 33, 55);
firstColor.hex();
firstColor.rgb();

const black = colorMaker(0, 0, 0);
firstColor.hex();
firstColor.rgb();

black.hex === firstColor.hex;

//constructor
function Color(r, g, b) {
	this.r = r;
	this.g = g;
	this.b = b;
}

Color.prototype.rgb = function() {
	const { r, g, b } = this;
	return `rgb(${r},${g},${b})`;
};

Color.prototype.hex = function() {
	const { r, g, b } = this;
	return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};

Color.prototype.rgba = function(a = 1) {
	const { r, g, b } = this;
	return `rgba(${r},${g},${b},${a})`;
};

const newColor = new Color(244, 233, 22);
const newColor2 = new Color(0, 0, 0);
