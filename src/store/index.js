import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./sagas";
import { todosReducer } from "./reducers/todosReducer";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  todos: todosReducer,
});

const configureStore = (init) =>
  createStore(
    rootReducer,
    init,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );

const store = configureStore({});

sagaMiddleware.run(rootSaga);

export default store;
