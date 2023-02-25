import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createTodo } from "../../../store/actions/todosActions";
import { Button } from "../../common/Button/Button";
import DatePicker from "../../common/DatePicker/DatePicker";
import { Input } from "../../common/Input/Input";
import { FormStyled, FormWrapper } from "./TodoForm.styles";

const TodoForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [date, setDate] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(
      createTodo({
        id: Math.random(),
        completed: false,
        title,
        date: date?.toLocaleDateString(),
      })
    );

    setDate(null);
    setTitle("");
  };

  const onDateChange = (date) => {
    setDate(date);
  };

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };

  return (
    <FormWrapper>
      <FormStyled onSubmit={onSubmit}>
        <div>
          <Input onChange={onTitleChange} value={title} placeholder="Title" />
          <DatePicker onChange={onDateChange} value={date} placeholder="Date" />
        </div>
        <Button type="submit">Create todo</Button>
      </FormStyled>
    </FormWrapper>
  );
};

export default TodoForm;
