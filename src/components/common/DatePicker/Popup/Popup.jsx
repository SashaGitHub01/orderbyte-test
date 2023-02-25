import React, { useMemo, useState, useLayoutEffect } from "react";
import ReactDOM from "react-dom";
import { calendarUtils, months, weekDays } from "../utils";
import {
  PopupWrapper,
  PopupBox,
  CalendarHeader,
  CalendarCell,
  CalendarBody,
} from "./Popup.styles";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const Popup = ({ elementRef, onDateSelect, value, isOpen, anchor }) => {
  const [panelYear, setPanelYear] = useState(() => new Date().getFullYear());
  const [panelMonth, setPanelMonth] = useState(() => new Date().getMonth());

  const anchorCoords = useMemo(() => {
    let coords;

    if (isOpen) {
      const elRect = anchor?.getBoundingClientRect();
      coords = { left: elRect.left, top: elRect.top + elRect.height };
    } else {
      coords = { left: 0, top: 0 };
    }

    return coords;
  }, [isOpen]);

  useLayoutEffect(() => {
    if (value instanceof Date) {
      setPanelMonth(value.getMonth());
      setPanelYear(value.getFullYear());
    }
  }, [value]);

  const dayCells = useMemo(() => {
    const prevMonthDays = calendarUtils.getPrevMonthDays(panelYear, panelMonth);
    const currentMonthDays = calendarUtils.getCurrentMonthDays(
      panelYear,
      panelMonth
    );
    const nextMonthDays = calendarUtils.getNextMonthDays(panelYear, panelMonth);

    return [...prevMonthDays, ...currentMonthDays, ...nextMonthDays];
  }, [panelMonth, panelYear]);

  const handleNextMonth = () => {
    if (panelMonth === 11) {
      setPanelMonth(0);
      setPanelYear((prevYear) => prevYear + 1);
    } else {
      setPanelMonth((prevMonth) => prevMonth + 1);
    }
  };

  const handlePrevMonth = () => {
    if (panelMonth === 0) {
      setPanelMonth(11);
      setPanelYear((prevYear) => prevYear - 1);
    } else {
      setPanelMonth((prevMonth) => prevMonth - 1);
    }
  };

  return ReactDOM.createPortal(
    <PopupWrapper
      onMouseDown={(e) => e.preventDefault()}
      coordinates={anchorCoords}
      ref={elementRef}
    >
      {!!isOpen && (
        <PopupBox>
          <CalendarHeader>
            <div className="icon" onClick={handlePrevMonth}>
              <MdArrowBack />
            </div>
            <b className={"s.month_name"}>
              {panelYear} {months.en[panelMonth]}
            </b>
            <div className="icon" onClick={handleNextMonth}>
              <MdArrowForward />
            </div>
          </CalendarHeader>
          <CalendarBody>
            {weekDays.en.map((name) => {
              return (
                <CalendarCell key={name} dateType="weekday">
                  {name}
                </CalendarCell>
              );
            })}
            {dayCells.map((cell) => {
              const isCurrent = cell.type === "current";
              const isSelected =
                value?.getFullYear() === cell.year &&
                value?.getMonth() === cell.month &&
                value?.getDate() === cell.date;

              return (
                <CalendarCell
                  key={`${cell.date} ${cell.month}`}
                  onClick={() => onDateSelect(cell)}
                  dateType={isCurrent ? "current" : "out"}
                  isSelected={isSelected}
                >
                  {cell.date}
                </CalendarCell>
              );
            })}
          </CalendarBody>
        </PopupBox>
      )}
    </PopupWrapper>,
    document.body
  );
};

export default Popup;
