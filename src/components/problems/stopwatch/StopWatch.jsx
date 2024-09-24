import { useState } from "react";
import Code from "../../general/Code";

const code = `
import { useState } from "react";

function StopWatch() {
  const [time, setTime] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  function handleStart() {
    clearInterval(intervalId);

    const id = setInterval(() => {
      setTime((time) => time + 1);
    }, 1000);
    setIntervalId(id);
  }

  function handlePause() {
    clearInterval(intervalId);
    setIntervalId(null);
  }

  function handleReset() {
    clearInterval(intervalId);
    setTime(0);
    setInterval(null);
  }

  return (
    <main className="space-y-6">
      <section>
        <h1>3. Stopwatch</h1>
      </section>

      <section>
        <h2>Solution: </h2>
        <div className="bg-slate-700 p-6 mb-4 rounded-xl flex items-center justify-center text-[64px] font-mono text-green-800">
          {time} sec
        </div>
        <div className="flex items-center w-full justify-center flex-wrap gap-4">
          <button
            className="w-36 p-2 rounded-lg bg-blue-600 active:scale-95 transition-all"
            onClick={handleStart}
          >
            Start
          </button>
          <button
            className="w-36 p-2 rounded-lg bg-blue-600 active:scale-95 transition-all"
            onClick={handlePause}
          >
            Pause
          </button>
          <button
            className="w-36 p-2 rounded-lg bg-blue-600 active:scale-95 transition-all"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </section>
    </main>
  );
}

export default StopWatch;
`;

function StopWatch() {
  const [time, setTime] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  function handleStart() {
    clearInterval(intervalId);

    const id = setInterval(() => {
      setTime((time) => time + 1);
    }, 1000);
    setIntervalId(id);
  }

  function handlePause() {
    clearInterval(intervalId);
    setIntervalId(null);
  }

  function handleReset() {
    clearInterval(intervalId);
    setTime(0);
    setInterval(null);
  }

  return (
    <main className="space-y-6">
      <section>
        <h1>3. Stopwatch</h1>
        <p>
          Create a stopwatch application through which users can start, pause
          and reset the timer. Use React state, event handlers and the
          setTimeout or setInterval functions to manage the timer’s state and
          actions.
        </p>
      </section>

      <section>
        <h2>Solution: </h2>
        <div className="bg-slate-700 p-6 mb-4 rounded-xl flex items-center justify-center text-[64px] font-mono text-green-800">
          {time} sec
        </div>
        <div className="flex items-center w-full justify-center flex-wrap gap-4">
          <button
            className="w-36 p-2 rounded-lg bg-blue-600 active:scale-95 transition-all"
            onClick={handleStart}
          >
            Start
          </button>
          <button
            className="w-36 p-2 rounded-lg bg-blue-600 active:scale-95 transition-all"
            onClick={handlePause}
          >
            Pause
          </button>
          <button
            className="w-36 p-2 rounded-lg bg-blue-600 active:scale-95 transition-all"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </section>

      <Code code={code}></Code>
    </main>
  );
}

export default StopWatch;
