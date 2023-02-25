import React, { useState, useRef } from "react";
import { useClickOutside } from "../../../hooks/useClickOutside";
import { Input } from "../Input/Input";
import Popup from "./Popup/Popup";

const DatePicker = ({ value, onChange, placeholder }) => {
  const [open, setOpen] = useState(false);
  const popupRef = useRef(null);
  const inputRef = useRef(null);

  const handleOpen = () => {
    setOpen(true);
  };

  const onFocus = () => {
    handleOpen();
  };

  const handleClose = () => {
    setOpen(false);
  };

  useClickOutside([popupRef.current, inputRef.current], handleClose);

  const onDateSelect = (item) => {
    onChange(new Date(item.year, item.month, item.date));
    handleClose();
  };

  return (
    <>
      <Input
        onMouseDown={onFocus}
        placeholder={placeholder}
        value={value?.toLocaleDateString() || ""}
        readOnly
        ref={inputRef}
      />
      <Popup
        onDateSelect={onDateSelect}
        value={value}
        elementRef={popupRef}
        isOpen={open}
        anchor={inputRef.current}
      />
    </>
  );
};

export default DatePicker;
