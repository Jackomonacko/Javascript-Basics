const myImg = document.createElement('img');
myImg.src = 'https://images.unsplash.com/photo-1576189407232-a93b7f502295?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80'

myImg.style.width = '500px';
document.body.append(myImg);
myImg.style.transition = 'all 2s';

const sheet= new CSSStyleSheet();
sheet.replace('* {transition: all 2s}');
document.adoptedStyleSheets = [sheet];

const allElly = document.body.children;

setInterval(() => {
for(let el of allElly){
const rotation = Math.floor(Math.random() * 5400);
const x = Math.floor(document.body.clientWidth * Math.random())
const y = Math.floor(document.body.clientHeight * Math.random())
el.style.transform = `translate(${x}px,${y}px) rotate(${rotation}deg)`;
}
}, 1000)
