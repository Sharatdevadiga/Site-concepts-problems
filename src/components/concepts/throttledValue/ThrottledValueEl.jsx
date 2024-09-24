import { useState } from "react";
import useThrottledValue from "./useThrottledValue";
import Code from "../../general/Code";

const codeStr = `
// useThrottledValue HOOK
import { useEffect, useRef, useState } from "react";

function useThrottledValue(value, delay = 500) {
  const [throttledValue, setThrottledValue] = useState(value);
  const lastExecutedRef = useRef(new Date());

  useEffect(() => {
    const timerId = setTimeout(() => {
      if (Date.now() - lastExecutedRef.current >= delay) {
        setThrottledValue(value);
        lastExecutedRef.current = Date.now();
      }
    }, delay - (Date.now() - lastExecutedRef.current));
    return () => clearTimeout(timerId);
  }, [value, delay]);

  return throttledValue;
}

export default useThrottledValue;

// DEBOUNCER COMPONENT
function ThrottledValueEL() {
  const [inputVal, setInputVal] = useState("");
  const throttledValue = useThrottledValue(inputVal);

  function handleChange(e) {
    setInputVal(e.target.value);
  }

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-xl font-bold">1. Debouncer</h1>
      <div className="flex flex-col gap-2">
        <input
          className="bg-blue-500 p-3 rounded-lg"
          type="text"
          onChange={handleChange}
        />
        <h3>Input value: {inputVal}</h3>
        <h3>Debounce Vallue: {throttledValue}</h3>
      </div>
    </div>
  );
}
`;

function ThrottledValueEL() {
  const [inputVal, setInputVal] = useState("");
  const throttledValue = useThrottledValue(inputVal);

  function handleChange(e) {
    setInputVal(e.target.value);
  }

  return (
    <main className="space-y-12">
      <section>
        <h1>Throttled Value</h1>
        <p>
          A throttled function custom hook allows you to limit the rate at which
          a function is called. This is useful when you want to ensure that a
          function is not called too frequently, for example in response to
          continuous events like scrolling, resizing, or typing.
        </p>
      </section>
      <section>
        <h2>Example</h2>
        <div className="flex flex-col gap-2 border-slate-100 border-2 p-4">
          <input
            className="bg-blue-500 p-3 rounded-lg"
            type="text"
            onChange={handleChange}
            placeholder="Enter some text"
          />
          <h3>Input value: {inputVal}</h3>
          <h3>Debounce Vallue: {throttledValue}</h3>
        </div>
      </section>
      <Code code={codeStr}></Code>
    </main>
  );
}

export default ThrottledValueEL;
