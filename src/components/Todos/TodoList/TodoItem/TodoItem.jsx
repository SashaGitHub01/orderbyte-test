import React from "react";
import styled from "styled-components";

const TodoWrapperStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
  padding: 10px 20px;
  background-color: ${(props) => (props.completed ? "#88ff0026" : "#ff070728")};
  transition: 0.3s ease;

  & .info {
    display: flex;
    flex-direction: column;
    gap: 12px;
    flex-grow: 1;

    & h2 {
      font-size: ${(props) => props.theme.fonts.lg};
    }
  }
`;

const TodoItem = ({ id, title, completed, onCompletedChange, date }) => {
  return (
    <TodoWrapperStyled completed={completed}>
      <div className={"info"}>
        <h2>{title}</h2>
        {!!date && <div>Created at: {date}</div>}
      </div>
      <div className="checkbox">
        <input
          onChange={() => onCompletedChange(id)}
          type={"checkbox"}
          checked={completed}
        />
      </div>
    </TodoWrapperStyled>
  );
};

export default TodoItem;
