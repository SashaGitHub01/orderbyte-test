import styled from "styled-components";

export const Input = styled.input`
  border-radius: 4px;
  border: 1px solid;
  border-color: rgba(0, 0, 0, 0.2);
  padding: 5px;
  font-size: ${(props) => props.theme.fonts.md};
  transition: 0.3s ease;
  width: 100%;

  &:focus {
    border-color: rgba(0, 0, 0, 1);
  }
`;
