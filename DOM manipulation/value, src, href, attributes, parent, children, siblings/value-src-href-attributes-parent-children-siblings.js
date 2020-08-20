//value, src, href
const inputs = document.querySelectorAll('input');

inputs[0].value;

inputs[2].value;

inputs[2].checked;

inputs[0].value = '';

inputs[3].value;

inputs[1].placeholder;

inputs[1].placeholder = 'Please enter your password!';

const a = document.querySelector('a');

a.href;

const im = document.querySelector('img');

im.src;

//getting and setting attributes

const range = document.querySelector('input[type="range"]');

range.getAttribute('max');
range.getAttribute('min');
range.getAttribute('type');

range.setAttribute('min', '-500');

range.value;

//range.setAttribute('type', 'radio');

//finding parent/children/siblings
const firstLi = document.querySelector('li');

console.dir(firstLi);

firstLi.parentElement;
firstLi.parentElement.parentElement;
firstLi.parentElement.parentElement.parentElement;
firstLi.parentElement.parentElement.parentElement.parentElement;

const ul = document.querySelector('ul');

ul.children;

ul.children[0];

ul.children[0].innerText;

firstLi.nextElementSibling;

const thirdLi = firstLi.nextElementSibling.nextElementSibling;

thirdLi;
