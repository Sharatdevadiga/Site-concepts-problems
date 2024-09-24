import { useEffect, useRef, useState } from "react";

function useThrottledValue(value, limit = 500) {
  const [throttledValue, setThrottledValue] = useState(value);
  const lastRanTime = useRef(Date.now());

  useEffect(() => {
    const timerid = setTimeout(() => {
      if (Date.now() - lastRanTime.time >= limit) {
        setThrottledValue(value);
        lastRanTime.time = Date.now();
      }
    }, limit - (Date.now() - lastRanTime.time));

    return () => clearTimeout(timerid);
  }, [value, limit]);

  return throttledValue;
}

export default useThrottledValue;
