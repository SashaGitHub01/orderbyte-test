import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchTodos } from "../../store/actions/todosActions";
import TodoForm from "./TodoForm/TodoForm";
import TodoList from "./TodoList/TodoList";

const Todos = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  return (
    <div>
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default Todos;
