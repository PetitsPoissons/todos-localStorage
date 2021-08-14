// select DOM elements
var newTodoForm = document.getElementById('new-todo-form');
var newTodoInput = document.getElementById('new-todo');
var todosList = document.getElementById('todos-list');

var todos = [];

function addTodo(event) {
  event.preventDefault();
  var newTodoText = newTodoInput.value;
  todos.push(newTodoText);
  newTodoInput.value = '';
}

newTodoForm.addEventListener('submit', addTodo);