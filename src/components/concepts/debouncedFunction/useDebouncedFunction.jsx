import { useCallback, useRef } from "react";

const useDebouncedFunction = function (fn, delay = 300) {
  const timerId = useRef(null);

  const debouncedFunction = useCallback(
    (...args) => {
      if (timerId.current) clearTimeout(timerId.current);

      timerId.current = setTimeout(() => {
        fn(...args);
      }, delay);
    },
    [fn, delay]
  );

  return debouncedFunction;
};

export default useDebouncedFunction;
