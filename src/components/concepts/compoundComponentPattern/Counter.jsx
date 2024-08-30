/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const Countercontext = createContext();

function Counter({ children }) {
  const [count, setCount] = useState(0);
  const increase = () => setCount((c) => c + 1);
  const decrease = () => setCount((c) => c - 1);

  return (
    <Countercontext.Provider value={{ count, increase, decrease }}>
      <div className="space-x-6 space-y-4 border-2 p-4 flex items-center">
        {children}
      </div>
    </Countercontext.Provider>
  );
}

function Count() {
  const { count } = useContext(Countercontext);
  return (
    <span className="min-w-10 px-2 bg-slate-500 rounded-md flex justify-center">
      {count}
    </span>
  );
}

function Label({ children }) {
  return <h3>{children}</h3>;
}

function Increase({ icon }) {
  const { increase } = useContext(Countercontext);
  return (
    <button
      className="bg-blue-500 w-24 inline-block rounded-full active:scale-95"
      onClick={increase}
    >
      {icon}
    </button>
  );
}

function Decrease({ icon }) {
  const { decrease } = useContext(Countercontext);
  return (
    <button
      className="bg-blue-500 w-24 inline-block rounded-full active:scale-95"
      onClick={decrease}
    >
      {icon}
    </button>
  );
}

Counter.Count = Count;
Counter.Label = Label;
Counter.Increase = Increase;
Counter.Decrease = Decrease;

export default Counter;
