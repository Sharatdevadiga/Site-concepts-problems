import CodeRunner from "./Coderunner";

const CodeRunnerEl = () => {
  const sampleCode = `
    const a = 10;
    const b = 20;
    a + b;
  `;

  return (
    <div>
      <h1>Code Runner Example</h1>
      <CodeRunner code={sampleCode} />
    </div>
  );
};

export default CodeRunnerEl;
