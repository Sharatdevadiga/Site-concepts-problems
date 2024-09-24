import { useState } from "react";
import Code from "../../general/Code";

const code = `
function Counter() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount((count) => count + 1);
  }

  function handleDecrement() {
    setCount((count) => count - 1);
  }

  return (
        <div className="p-4 border-2 flex border-slate-200 space-x-3">
          <button
            className="bg-blue-600 rounded-lg px-4 py-1 w-24"
            onClick={handleDecrement}
          >
            -
          </button>
          <span className="bg-slate-600 rounded-lg px-4 py-1 w-36 items-center justify-center flex">
            count: {count}
          </span>
          <button
            className="bg-blue-600 rounded-lg px-4 py-1 w-24"
            onClick={handleIncrement}
          >
            +
          </button>
        </div>
  );
}

export default Counter;
`;

function Counter() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount((count) => count + 1);
  }

  function handleDecrement() {
    setCount((count) => count - 1);
  }

  return (
    <main className="space-y-12">
      <section>
        <h1>2. Counter</h1>
        <p>
          implement a stateful component that displays a nincrement button, a
          crement button and a counter? The counter should increment or
          decreased by 1 each time the respective button is clicked. Write the
          code for this component.
        </p>
      </section>
      <section>
        <h2>Example:</h2>
        <div className="p-4 border-2 flex border-slate-200 space-x-3">
          <button
            className="bg-blue-600 rounded-lg px-4 py-1 w-24"
            onClick={handleDecrement}
          >
            -
          </button>
          <span className="bg-slate-600 rounded-lg px-4 py-1 w-36 items-center justify-center flex">
            count: {count}
          </span>
          <button
            className="bg-blue-600 rounded-lg px-4 py-1 w-24"
            onClick={handleIncrement}
          >
            +
          </button>
        </div>
      </section>
      <Code code={code}></Code>
    </main>
  );
}

export default Counter;
