import { useState } from "react";
import useDebouncedFunction from "./useDebouncedFunction";
import Code from "../../general/Code";

const code = `
// USEDEBOUNCEDFUNCTION CUSTOM HOOK
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


// USING THE CUSTOM HOOK
import { useState } from "react";
import useDebouncedFunction from "./useDebouncedFunction";

function DebouncedFunctionEl() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  async function fetchResults(searchTerm) {
    if (!searchTerm) {
      setData([]);
      return;
    }

    try {
      // simulating the fetching action
      const res = await fetchFakeData(searchTerm);
      const resData = res.data;
      setData(resData);
    } catch (err) {
      console.log(err);
    }
  }

  const debouncedFetcher = useDebouncedFunction(fetchResults, 300);

  const handler = function (e) {
    const val = e.target.value;
    setQuery(val);
    console.log(val);
    val === "" ? setData([]) : debouncedFetcher(val);
  };

  return (
    <main>
      <section>
        <h1>Debounced function</h1>
      </section>
      <section>
        <h2>Example</h2>

        <div className="space-y-4 border-2 border-slate-200 p-4 h-96">
          <input
            type="text"
            name="query"
            onChange={handler}
            placeholder="Type anything"
            className="bg-slate-700 border-2 w-full border-slate-600  p-3 rounded-lg"
          />

          <div className="h-4/5 p-4 bg-stone-950">
            <h3 className="font-bold">Search result for: {query}</h3>
            {data.length > 0 && query.length ? (
              data?.map((entry) => <p key={entry}>{entry}</p>)
            ) : (
              <div className="h-full flex items-center justify-center">
                <p>No data to show!! Search for something</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

export default DebouncedFunctionEl;

// A fake data generator function
async function fetchFakeData(term) {
  let data = [];
  let len = Math.random() * 10 + 1;
  for (let i = 1; i <= len; i++) {
    data.push(term-i);
  }
  return new Promise((resolve) => {
    setTimeout(() => resolve({ data }));
  }, 50);
}
`;

function DebouncedFunctionEl() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  async function fetchResults(searchTerm) {
    if (!searchTerm) {
      setData([]);
      return;
    }

    try {
      // simulating the fetching action
      const res = await fetchFakeData(searchTerm);
      const resData = res.data;
      setData(resData);
    } catch (err) {
      console.log(err);
    }
  }

  const debouncedFetcher = useDebouncedFunction(fetchResults, 300);

  const handler = function (e) {
    const val = e.target.value;
    setQuery(val);
    console.log(val);
    val === "" ? setData([]) : debouncedFetcher(val);
  };

  return (
    <main className="space-y-12">
      <section>
        <h1>Debounced function</h1>
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

        <div className="space-y-4 border-2 border-slate-200 p-4 h-96">
          <input
            type="text"
            name="query"
            onChange={handler}
            placeholder="Type anything"
            className="bg-slate-700 border-2 w-full border-slate-600  p-3 rounded-lg"
          />

          <div className="h-4/5 p-4 bg-stone-950">
            <h3 className="font-bold">Search result for: {query}</h3>
            {data.length > 0 && query.length ? (
              data?.map((entry) => <p key={entry}>{entry}</p>)
            ) : (
              <div className="h-full flex items-center justify-center">
                <p>No data to show!! Search for something</p>
              </div>
            )}
          </div>
        </div>
      </section>
      <Code code={code}></Code>
    </main>
  );
}

export default DebouncedFunctionEl;

// A fake data generator function
async function fetchFakeData(term) {
  let data = [];
  let len = Math.random() * 10 + 1;
  for (let i = 1; i <= len; i++) {
    data.push(`${term}-${i}`);
  }
  return new Promise((resolve) => {
    setTimeout(() => resolve({ data }));
  }, 50);
}
