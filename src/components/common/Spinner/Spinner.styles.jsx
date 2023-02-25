import styled from "styled-components";

export const SpinnerContainer = styled.div`
  width: 100%;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const SpinnerStyled = styled.div`
  width: 60px;
  padding: 6px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: #e3c0ffb5;
  --_m: conic-gradient(#0000 10%, #000), linear-gradient(#000 0 0) content-box;
  -webkit-mask: var(--_m);
  mask: var(--_m);
  -webkit-mask-composite: source-out;
  mask-composite: subtract;
  animation: s3 0.7s infinite linear;

  @keyframes s3 {
    to {
      transform: rotate(1turn);
    }
  }
`;
