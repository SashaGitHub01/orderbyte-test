import { todoConstants } from "../constants/todos";

export const createTodo = (newTodo) => ({
  type: todoConstants.FETCH_CREATE_TODO,
  payload: newTodo,
});

export const addTodo = (newTodo) => ({
  type: todoConstants.ADD_TODO,
  payload: newTodo,
});

export const deleteTodo = (id) => ({
  type: todoConstants.DELETE_TODO,
  payload: id,
});

export const fetchTodos = () => ({
  type: todoConstants.FETCH_TODOS,
});

export const setTodos = (todos) => ({
  type: todoConstants.SET_TODOS,
  payload: todos,
});

export const setTodosError = (err) => ({
  type: todoConstants.SET_TODOS_ERROR,
  payload: err,
});

export const changeTodoStatus = (id) => ({
  type: todoConstants.CHANGE_STATUS,
  payload: id,
});
