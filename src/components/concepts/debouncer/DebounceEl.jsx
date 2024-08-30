import { useState } from "react";
import useDebouncer from "./useDebouncer";
import Code from "../../code/Code";

const codeStr = `
// USEDEBOUNCER HOOK
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

// DEBOUNCER COMPONENT
function DebounceEl() {
  const [inputVal, setInputVal] = useState("");
  const debouncedValue = useDebouncer(inputVal);

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
        <h3>Debounce Vallue: {debouncedValue}</h3>
      </div>
    </div>
  );
}
`;

function DebounceEl() {
  const [inputVal, setInputVal] = useState("");
  const debouncedValue = useDebouncer(inputVal);

  function handleChange(e) {
    setInputVal(e.target.value);
  }

  return (
    <main className="space-y-12">
      <section>
        <h1>1. Debouncer</h1>
        <p>
          A debouncer is a function that delays the execution of a task until a
          certain period of time has passed since it was last called. Its
          commonly used to limit the rate at which a function is executed,
          especially in response to user input, like typing in a search box. The
          purpose is to avoid performing expensive operations (like API calls)
          too frequently.
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
          <h3>Debounce Vallue: {debouncedValue}</h3>
        </div>
      </section>
      <Code code={codeStr}></Code>
    </main>
  );
}

export default DebounceEl;
