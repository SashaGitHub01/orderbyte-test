import { STATUSES } from "../../constants/index";
import { todoConstants } from "../constants/todos";

const initialState = {
  status: STATUSES.INIT,
  todos: [],
  error: null,
};

export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case todoConstants.SET_TODOS:
      return {
        ...state,
        todos: action.payload,
        status: STATUSES.SUCCESS,
        error: null,
      };

    case todoConstants.FETCH_TODOS:
      return {
        ...state,
        status: STATUSES.LOADING,
      };

    case todoConstants.DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    case todoConstants.ADD_TODO:
      return {
        ...state,
        todos: [action.payload, ...state.todos],
      };

    case todoConstants.CHANGE_STATUS:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          return {
            ...todo,
            completed:
              todo.id === action.payload ? !todo.completed : todo.completed,
          };
        }),
      };

    case todoConstants.SET_TODOS_ERROR:
      return {
        ...state,
        status: STATUSES.ERROR,
        error: action.payload,
      };

    default:
      return state;
  }
};
