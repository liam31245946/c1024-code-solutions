/* exported todos */
interface Todo {
  todoId: string;
  task: string;
  isCompleted: boolean;
}

let todos: Todo[] = readTodo();

function writeTodos(): void {
  const todosJSON = JSON.stringify(todos);
  localStorage.setItem('todos-storage', todosJSON);
}
console.log('writeTodos', writeTodos);

const readTodoJason = localStorage.getItem('todos-storage');

function readTodo(): Todo[] {
  if (readTodoJason) {
    return JSON.parse(readTodoJason);
  } else {
    return [];
  }
}
