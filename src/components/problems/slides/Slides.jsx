import { useState } from "react";
import slidesContent from "./data";
import Code from "../../general/Code";

const code = `
import { useState } from "react";
import slidesContent from "./data";

function Slides() {
  const [current, setCurrent] = useState(0);

  function handleNext() {
    let next = current + 1 >= slidesContent.length ? current : current + 1;
    setCurrent(next);
  }

  function handlePrev() {
    let prev = current - 1 < 0 ? current : current - 1;
    setCurrent(prev);
  }

  function handleReset() {
    setCurrent(0);
  }

  return (
    <div>
      <h1>Slides</h1>
      <div className="w-full">
        <div className="h-96 bg-slate-800 p-5 text-center pt-12 border-b-2 border-slate-600">
          <h1>
            {current + 1}. {slidesContent[current].title}
          </h1>
          <p>{slidesContent[current].content}</p>
        </div>
        <div className="flex gap-3 mx-auto justify-between p-4 bg-slate-800">
          <button
            className="bg-blue-600 px-4 py-2 rounded-md active:scale-95"
            onClick={handlePrev}
          >
            Prev
          </button>
          <button
            className="bg-blue-600 px-4 py-2 active:scale-95 rounded-md"
            onClick={handleReset}
          >
            Restart
          </button>
          <button
            className="bg-blue-600 px-4 py-2 rounded-md active:scale-95"
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Slides;

`;

function Slides() {
  const [current, setCurrent] = useState(0);

  function handleNext() {
    let next = current + 1 >= slidesContent.length ? current : current + 1;
    setCurrent(next);
  }

  function handlePrev() {
    let prev = current - 1 < 0 ? current : current - 1;
    setCurrent(prev);
  }

  function handleReset() {
    setCurrent(0);
  }

  return (
    <div>
      <h1>Slides</h1>
      <p className="mb-6">
        You need to implement a slideshow component in React that displays a
        series of slides imported from a data file. The component should allow
        users to navigate through slides using Prev and Next buttons and reset
        the slideshow to the first slide using a Restart button. The Prev button
        should not move before the first slide, and the Next button should not
        go beyond the last slide. Use React&#39;s useState hook to manage the
        current slide index and create functions to handle navigation and reset
        actions.
      </p>
      <div className="w-full">
        <div className="h-96 bg-slate-800 p-5 text-center pt-12 border-b-2 border-slate-600">
          <h1>
            {current + 1}. {slidesContent[current].title}
          </h1>
          <p>{slidesContent[current].content}</p>
        </div>
        <div className="flex gap-3 mx-auto justify-between p-4 bg-slate-800">
          <button
            className="bg-blue-600 px-4 py-2 rounded-md active:scale-95"
            onClick={handlePrev}
          >
            Prev
          </button>
          <button
            className="bg-blue-600 px-4 py-2 active:scale-95 rounded-md"
            onClick={handleReset}
          >
            Restart
          </button>
          <button
            className="bg-blue-600 px-4 py-2 rounded-md active:scale-95"
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </div>

      <Code code={code}></Code>
    </div>
  );
}

export default Slides;
