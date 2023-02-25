import { put, call, takeLatest, takeEvery } from "redux-saga/effects";
import { TodoApi } from "../../API/TodoApi";
import { setTodos, setTodosError, addTodo } from "../actions/todosActions";
import { todoConstants } from "../constants/todos";

const delay = () => {
  return new Promise((res) => {
    setTimeout(() => {
      res("hey");
    }, 600);
  });
};

function* fetchTodoList() {
  try {
    const res = yield call(TodoApi.getTodos);
    yield put(setTodos(res));
  } catch (err) {
    yield put(setTodosError(err?.message));
  }
}

function* fetchCreateTodo({ payload }) {
  try {
    yield call(delay); // fake api call
    yield put(addTodo(payload));
  } catch (err) {
    yield put(setTodosError(err?.message));
  }
}

export function* todosWatcher() {
  yield takeLatest(todoConstants.FETCH_TODOS, fetchTodoList);
  yield takeEvery(todoConstants.FETCH_CREATE_TODO, fetchCreateTodo);
}
