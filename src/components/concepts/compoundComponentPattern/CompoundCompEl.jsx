import Code from "../../code/Code";
import Counter from "./counter";

const codeStr = `
// COMPOUND Component 

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
  return <span>{count}</span>;
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


// USAGE
function CompoundCompEl() {
  return (
    <div className="flex flex-col gap-6">
      <h1>2. Compound Component pattern</h1>
      <Counter>
        <Counter.Label>A. CCP example 1</Counter.Label>
        <Counter.Count></Counter.Count>
        <Counter.Increase icon="+"></Counter.Increase>
        <Counter.Decrease icon="-"></Counter.Decrease>
      </Counter>
      <Counter>
        <Counter.Label>B. CCP exapmle 2</Counter.Label>
        <Counter.Increase icon="+"></Counter.Increase>
        <Counter.Count></Counter.Count>
        <Counter.Decrease icon="-"></Counter.Decrease>
      </Counter>
      <Counter>
        <Counter.Label>C. CCP exapmle 2</Counter.Label>
        <Counter.Increase icon="+"></Counter.Increase>
        <Counter.Decrease icon="-"></Counter.Decrease>
        <Counter.Count></Counter.Count>
      </Counter>
    </div>
  );
}

`;

function CompoundCompEl() {
  return (
    <div className="space-y-12">
      <div>
        <h1>2. Compound Component pattern</h1>
        <p>
          The Compound Component Pattern is a design pattern in React that
          allows multiple related components to work together to manage state
          and behavior. It enables you to build a group of components that share
          state and logic but can be used flexibly together in various
          combinations.
        </p>
      </div>
      <div>
        <h2>Example</h2>
        <Counter>
          <Counter.Label>A. CCP example 1</Counter.Label>
          <Counter.Count></Counter.Count>
          <Counter.Increase icon="+"></Counter.Increase>
          <Counter.Decrease icon="-"></Counter.Decrease>
        </Counter>
        <Counter>
          <Counter.Label>B. CCP exapmle 2</Counter.Label>
          <Counter.Increase icon="+"></Counter.Increase>
          <Counter.Count></Counter.Count>
          <Counter.Decrease icon="-"></Counter.Decrease>
        </Counter>
        <Counter>
          <Counter.Label>C. CCP exapmle 2</Counter.Label>
          <Counter.Increase icon="+"></Counter.Increase>
          <Counter.Decrease icon="-"></Counter.Decrease>
          <Counter.Count></Counter.Count>
        </Counter>
      </div>

      <Code code={codeStr}></Code>
    </div>
  );
}

export default CompoundCompEl;
