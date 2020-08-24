const input = document.querySelector('#username');

input.addEventListener('keydown', function(e) {
	console.log('key was down');
});

input.addEventListener('keyup', function(e) {
	console.log('key was released');
});

input.addEventListener('keypress', function(e) {
	console.log('key pressssed');
});

const addTodoInput = document.querySelector('#addTodo');
const todosUL = document.querySelector('#todos');

addTodoInput.addEventListener('keypress', function(e) {
	if (e.key === 'Enter') {
		if (!this.value) return;
		const newToDoText = this.value;
		const newToDo = document.createElement('li');
		newToDo.innerText = newToDoText;
		todosUL.appendChild(newToDo);
		this.value = '';
	}
});
