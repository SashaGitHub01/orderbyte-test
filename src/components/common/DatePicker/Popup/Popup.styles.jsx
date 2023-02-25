import styled, { css } from "styled-components";

export const PopupWrapper = styled.div`
  position: absolute;
  z-index: 1000;
  margin-top: 8px;
  width: 360px;

  ${css`
    left: ${(props) => `${props.coordinates?.left || 0}px`};
    top: ${(props) => `${props.coordinates?.top || 0}px`};
  `}
`;

export const PopupBox = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  padding: 10px;
  box-shadow: 0 0 6px 3px rgba(0, 0, 0, 0.089);
  border-radius: 4px;
  opacity: 0;
  animation: 0.5s fade ease-out forwards;

  @keyframes fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const CalendarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding-bottom: 5px;
  margin-bottom: 5px;
  border-bottom: 1px solid ${(props) => props.theme.colors.gray_light};

  & > b {
    font-size: ${(props) => props.theme.fonts.lg};
  }

  & .icon {
    font-size: ${(props) => props.theme.fonts.lg};
    display: flex;
    align-items: center;
    cursor: pointer;
  }
`;

export const CalendarBody = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(7, 1fr);
`;

const normalCell = css`
  cursor: pointer;
  transition: 0.3s ease background-color;

  &:hover {
    background-color: ${(props) => props.theme.colors.gray_light};
  }
`;

const outRangeCell = css`
  opacity: 0.3;
  pointer-events: none;
`;

const selectedCell = css`
  background-color: ${(props) => props.theme.colors.blue};
  color: ${(props) => props.theme.colors.white};
`;

export const CalendarCell = styled.div`
  display: flex;
  align-items: center;
  font-weight: ${(props) => (props.dateType === "weekday" ? 600 : 400)};
  justify-content: center;
  padding: 3px;

  ${(props) => props.dateType !== "weekday" && normalCell}
  ${(props) => props.dateType === "out" && outRangeCell}
  ${(props) => props.isSelected && selectedCell}
`;
