import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  font-size: ${(props) => props.theme.fonts.md};
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.blue};
  padding: 5px 10px;
  font-weight: 500;
`;
