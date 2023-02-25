import React, { useEffect } from "react";

export function useClickOutside(
  element,
  onClickOutside,
  eventType = "mousedown"
) {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (Array.isArray(element)) {
        const isTrue = element.reduce((prev, el) => {
          if (!!prev && !el) {
            return true;
          }
          return !!prev && el && !el.contains(event.target);
        }, true);

        if (isTrue) {
          return onClickOutside(event);
        }
      } else if (element && !element.contains(event.target)) {
        return onClickOutside(event);
      }
    };

    document.addEventListener(eventType, handleClickOutside, true);

    return () => {
      document.removeEventListener(eventType, handleClickOutside, true);
    };
  }, [element, onClickOutside]);
}
