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
