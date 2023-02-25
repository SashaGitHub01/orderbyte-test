import { all, spawn } from "redux-saga/effects";
import { todosWatcher } from "./todosSagas";

export function* rootSaga() {
  const sagas = [todosWatcher];

  yield all(sagas.map((s) => spawn(s)));
}
