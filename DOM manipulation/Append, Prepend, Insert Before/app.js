const parentUl = document.querySelector('ul');

parentUl;

const newLi = document.createElement('li');

newLi.innerText = 'NEW LI!!!!';

parentUl.appendChild(newLi);

const firstLi = document.querySelector('li.todo');

parentUl.insertBefore(newLi, firstLi);

const lastUl = document.querySelectorAll('li.todo');

const lastToDo = document.querySelectorAll('li.todo')[2];

parentUl.insertBefore(newLi, lastToDo);

const i = document.createElement('i');

i.innerText = 'i am an italy';

const firstP = document.querySelector('p');

firstP.insertAdjacentElement('beforebegin', i);

firstP.insertAdjacentElement('afterend', i);

firstP.insertAdjacentElement('afterbegin', i);
firstP.insertAdjacentElement('beforeend', i);

firstP.append(i, newLi);

firstP.prepend(i, newLi);
