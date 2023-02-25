import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { STATUSES } from "../../../constants";
import { changeTodoStatus } from "../../../store/actions/todosActions";
import { getTodosSelector } from "../../../store/selectors/todosSelectors";
import Spinner from "../../common/Spinner/Spinner";
import TodoItem from "./TodoItem/TodoItem";
import { TodoListWrapper } from "./TodoList.styles";

const TodoList = () => {
  const dispatch = useDispatch();
  const { status, todos } = useSelector(getTodosSelector);

  if (status === STATUSES.LOADING || status === STATUSES.INIT) {
    return <Spinner />;
  }

  const onCompletedChange = (id) => {
    dispatch(changeTodoStatus(id));
  };

  return (
    <TodoListWrapper>
      {todos.slice(0, 25).map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            onCompletedChange={onCompletedChange}
            {...todo}
          />
        );
      })}
    </TodoListWrapper>
  );
};

export default TodoList;
