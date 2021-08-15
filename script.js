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
  li.setAttribute('data-idx', i);
  li.innerText = todos[i];
  var button = document.createElement('button');
  button.innerHTML = '&#10004';
  li.appendChild(button);
  todosList.appendChild(li);
}
}

function addTodo(event) {
  event.preventDefault();
  var newTodoText = newTodoInput.value;
  if (newTodoText === '') {
    alert('Please enter a todo');
    return;
  }
  todos.push(newTodoText);
  saveTodos();
  newTodoInput.value = '';
  renderTodos();
}

function removeTodo(event) {
  if (event.target.tagName === 'BUTTON') {
    var idx = JSON.parse(event.target.parentElement.getAttribute('data-idx'));
    todos.splice(idx, 1);
    saveTodos();
    renderTodos();
  }
}

function saveTodos () {
  localStorage.setItem('todos', JSON.stringify(todos))
}

newTodoForm.addEventListener('submit', addTodo);
todosList.addEventListener('click', removeTodo);
renderTodos();