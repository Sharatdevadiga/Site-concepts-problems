import { useState } from "react";
import quizData from "./quizData";
import Code from "../../general/Code";

const code = `
import { useState } from "react";
import quizData from "./quizData";

function Quiz() {
  const [cur, setCur] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [selected, setSelected] = useState("");
  const [feedback, setFeedback] = useState("");

  function handleOptionChange(e) {
    setSelected(e.target.value);
  }

  function handleSubmit() {
    if (quizData[cur].answer === selected) {
      setCorrect((c) => correct + 1);
      setFeedback("Last answer was Correct");
    } else {
      setFeedback("Last answer was Incorrect");
    }

    setCur((cur) => cur + 1);
    if (cur + 1 >= quizData.length) {
      setFeedback(
        "You answered {correct} correctly out of {quizData.length}"
      );
    }
  }

  return (
    <div>
      <div>
        <h1>Quiz 1</h1>
      </div>

      <div className="bg-slate-700 h-64 p-3 flex flex-col">
        {cur >= quizData.length ? (
          <div>{feedback}</div>
        ) : (
          <>
            <h2>{quizData[cur].question}</h2>
            <div className="flex flex-col">
              {quizData[cur].options.map((opt, i) => (
                <label key={"{cur}-{opt}-{i}"} className="space-x-2">
                  <input
                    type="radio"
                    value={opt}
                    checked={selected === opt}
                    onChange={handleOptionChange}
                  />
                  <span>{opt}</span>
                </label>
              ))}
            </div>
            <button
              className="bg-blue-600 rounded-md cursor-pointer active:scale-90 px-4 py-2 self-center"
              onClick={handleSubmit}
            >
              Submit
            </button>
            <p>{feedback}</p>
          </>
        )}
      </div>
    </div>
  );
}

export default Quiz;
`;

function Quiz() {
  const [cur, setCur] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [selected, setSelected] = useState("");
  const [feedback, setFeedback] = useState("");

  function handleOptionChange(e) {
    setSelected(e.target.value);
  }

  function handleSubmit() {
    if (quizData[cur].answer === selected) {
      setCorrect((c) => correct + 1);
      setFeedback("Last answer was Correct");
    } else {
      setFeedback("Last answer was Incorrect");
    }

    setCur((cur) => cur + 1);
    if (cur + 1 >= quizData.length) {
      setFeedback(
        `You answered ${correct} correctly out of ${quizData.length}`
      );
    }
  }

  return (
    <div>
      <div>
        <h1>Quiz 1</h1>
        <p className="mb-4">
          Create a simple React quiz application that displays one question at a
          time from a predefined set of questions. Each question should have
          multiple-choice options represented as radio buttons. Users should be
          able to select an answer and submit it to see if they were correct.
          Keep track of the current question index, the number of correct
          answers, and provide feedback after each submission, as well as a
          final score once all questions have been answered.
        </p>
      </div>

      <div className="bg-slate-700 h-64 p-3 flex flex-col ">
        {cur >= quizData.length ? (
          <div>{feedback}</div>
        ) : (
          <>
            <h2>
              {cur + 1}. {quizData[cur].question}
            </h2>
            <div className="flex flex-col mb-4">
              {quizData[cur].options.map((opt, i) => (
                <label key={`${cur}-${opt}-${i}`} className="space-x-2">
                  <input
                    type="radio"
                    value={opt}
                    checked={selected === opt}
                    onChange={handleOptionChange}
                  />
                  <span>{opt}</span>
                </label>
              ))}
            </div>
            <button
              className="bg-blue-600 rounded-md cursor-pointer active:scale-90 px-4 py-2 self-start"
              onClick={handleSubmit}
            >
              Submit question {cur + 1}/{quizData.length}
            </button>
            <p>{feedback}</p>
          </>
        )}
      </div>

      <Code code={code}></Code>
    </div>
  );
}

export default Quiz;
