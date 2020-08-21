const ul = document.querySelector('section ul');

const removeThis = ul.querySelector('.special');

const deletedChild = ul.removeChild(removeThis);

const h1Remove = document.querySelector('h1');

h1Remove.remove();
