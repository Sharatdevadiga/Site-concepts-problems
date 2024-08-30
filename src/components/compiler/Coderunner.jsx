/* eslint-disable react/prop-types */
import { useState } from "react";
import * as Babel from "@babel/standalone";

const CodeRunner = ({ code }) => {
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  const handleRunCode = () => {
    try {
      // Transform and execute the code
      const transformedCode = Babel.transform(code, { presets: ["env"] }).code;
      const result = eval(transformedCode);
      setOutput(result);
      setError("");
    } catch (err) {
      setError(`Error: ${err.message}`);
    }
  };

  return (
    <div
      style={{
        color: "white",
        backgroundColor: "black",
        padding: "10px",
        borderRadius: "5px",
      }}
    >
      <pre>{code}</pre>
      <button onClick={handleRunCode} style={{ marginTop: "10px" }}>
        Run Code
      </button>
      <div
        style={{
          marginTop: "10px",
          color: "lime",
          backgroundColor: "black",
          padding: "10px",
          borderRadius: "5px",
        }}
      >
        {error ? <pre>{error}</pre> : <pre>{output}</pre>}
      </div>
    </div>
  );
};

export default CodeRunner;
