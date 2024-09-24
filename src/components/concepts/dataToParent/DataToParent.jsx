import Code from "../../general/Code";
import Parent from "./Parent";

const code = `
// PARENT -> PASSES THE CALLBACK TO CHILD ACCEPTING THE PARAMETER
import { useState } from "react";
import Child from "./Child";

function Parent() {
  const [bgColor, setBgColor] = useState("");

  function handleSetBgColor(color) {
    setBgColor(color);
  }

  return (
    <div>
      <div
        className="border-stone-200 border-2 rounded-lg h-44 w-44 relative flex items-center justify-center"
        style={{ backgroundColor: bgColor }}
      >
        <div className="bottom-2 absolute">
          <Child handleChange={handleSetBgColor}></Child>
        </div>
      </div>
    </div>
  );
}

export default Parent;

// CHILD -> CALLS THE CALLBACK WITH DATA
const colors = ["gray", "red", "yellow", "green", "cyan", "purple", "blue"];

function Child({ handleChange }) {
  return (
    <select
      className="border-stone-200 border-2 rounded-lg bg-stone-900 w-36 p-1"
      placeholder="Enter a color"
      onChange={(e) => handleChange(e.target.value)}
    >
      {colors.map((color) => (
        <option key={color} value={color}>
          {color}
        </option>
      ))}
    </select>
  );
}

export default Child;
`;

function DataToParent() {
  return (
    <main className="space-y-12">
      <section>
        <h1>Passing data from child component to parent</h1>
        <p>
          The callback pattern in React allows a child component to send data to
          its parent by invoking a function passed down as a prop. The parent
          provides a callback function to the child, which the child calls with
          the data it wants to send. This pattern helps maintain state in the
          parent while enabling the child to trigger updates based on user
          interactions.
        </p>
      </section>

      <section>
        <h2>Example:</h2>
        <Parent></Parent>
      </section>

      <Code code={code}></Code>
    </main>
  );
}

export default DataToParent;
