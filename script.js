// select DOM elements
var newTodoForm = document.getElementById('new-todo-form');
var newTodoInput = document.getElementById('new-todo');
var todosList = document.getElementById('todos-list');

var todos = [];

// Loop through todos and display them
function displayTodos() {
  for (var i = 0; i < todos.length; i++) {
  var li = document.createElement('li');
  li.innerText = todos[i];
  todosList.appendChild(li);
}
}

function addTodo(event) {
  event.preventDefault();
  var newTodoText = newTodoInput.value;
  todos.push(newTodoText);
  newTodoInput.value = '';
  displayTodos();
}

newTodoForm.addEventListener('submit', addTodo);