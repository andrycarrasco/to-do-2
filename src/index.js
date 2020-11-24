import './style.css';

import { Todo, TodoList } from './classes';
import { crearHtml } from './js/componentes';

export const tarea = new Todo();
// tarea.completado = true;

export const todoList = new TodoList();
// todoList.nuevoTodo( tarea );
// console.log( todoList );

todoList.todos.forEach(crearHtml);

// crearHtml( tarea );

