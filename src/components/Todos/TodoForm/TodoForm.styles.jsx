import styled from "styled-components";

export const FormWrapper = styled.div`
  padding-top: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FormStyled = styled.form`
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;

  & > div {
    display: flex;
    align-items: center;
    gap: 10px;

    & > input {
      flex-grow: 1;
      flex-basis: 0;
    }
  }
`;
