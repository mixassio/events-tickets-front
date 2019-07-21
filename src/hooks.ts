import { useState, useEffect } from "react";

export const useHeight = () => {
  const { clientHeight: initialHeight } = window.document.documentElement;
  const [height, setHeight] = useState(initialHeight);

  useEffect(() => {
    const listener = () => {
      const { clientHeight } = window.document.documentElement;

      if (clientHeight !== height) {
        setHeight(clientHeight);
      }
    };

    window.addEventListener("resize", listener, true);

    return () => {
      window.removeEventListener("resize", listener, true);
    };
  });

  return height;
};
