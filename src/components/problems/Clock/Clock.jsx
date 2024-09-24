import { useEffect, useState } from "react";
import Code from "../../general/Code";

const code = `
function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(() => new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <main className="space-y-6">
      <section>
        <h1>4. Clock</h1>
      </section>

      <section>
        <h2>Solution: </h2>
        <div className="bg-slate-700 p-6 rounded-xl flex items-center justify-center text-[64px] font-mono text-green-800">
          {time}
        </div>
      </section>
    </main>
  );
}

export default Clock;
`;

function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(() => new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <main className="space-y-6">
      <section>
        <h1>4. Clock</h1>
        <p>Create a clock application</p>
      </section>

      <section className="space-y-6">
        <h2>Solution: </h2>
        <div className="bg-slate-700 p-6 rounded-xl flex items-center justify-center text-[64px] font-mono text-green-800">
          {time}
        </div>
      </section>

      <Code code={code}></Code>
    </main>
  );
}

export default Clock;
