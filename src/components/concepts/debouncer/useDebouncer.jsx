import { useEffect, useState } from "react";
function useDebouncer(value, delay = 500) {
  const [debouncedValue, setDebouncedValue] = useState();

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timerId);
  }, [value, delay]);

  return debouncedValue;
}

export default useDebouncer;
