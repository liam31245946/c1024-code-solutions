'use strict';
let todos = [];
function writeTodos() {
  const todosJSON = JSON.stringify(todos);
  localStorage.setItem('todos-storage', todosJSON);
}
console.log('writeTodos', writeTodos);
const readTodoJason = localStorage.getItem('todos-storage');
if (readTodoJason) {
  todos = JSON.parse(readTodoJason);
} else {
  todos = [];
}
