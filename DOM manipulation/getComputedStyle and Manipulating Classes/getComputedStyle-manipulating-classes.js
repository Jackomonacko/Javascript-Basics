////getComputedStyle
const li = document.querySelector('li');

const styles = getComputedStyle(li);

li.style.color = 'purple';

styles.color;

const h1 = document.querySelector('h1');

const compStyle = getComputedStyle(h1);

compStyle.fontSize;


//manipulating classes
const todo = document.querySelector('#todos .todo');

// todo.style.color = 'black';
// todo.style.textDecoration = 'line-through';
// todo.style.opacity = '50%';

todo;

todo.getAttribute('class');

todo.setAttribute('class', 'todo done');

todo.classList;

todo.classList.remove('done');

todo.classList.add('done');

todo.classList.toggle('done');

todo.getAttribute('class').includes('done');

todo.setAttribute('class', todo.getAttribute('class') + ' done');

todo.getAttribute('class');
