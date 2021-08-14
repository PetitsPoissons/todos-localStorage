// select DOM elements
var newTodoForm = document.getElementById('new-todo-form');
var newTodoInput = document.getElementById('new-todo');
var todosList = document.getElementById('todos-list');

var todos = JSON.parse(localStorage.getItem('todos')) || [];

// Loop through todos and display them
function renderTodos() {
  todosList.innerHTML = '';
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
  localStorage.setItem('todos', JSON.stringify(todos))
  newTodoInput.value = '';
  renderTodos();
}

newTodoForm.addEventListener('submit', addTodo);
renderTodos();