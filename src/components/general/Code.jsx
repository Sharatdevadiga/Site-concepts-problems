/* eslint-disable react/prop-types */
import { Prism } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

function Code({ code }) {
  return (
    <section className="mt-6 p-4 bg-gray-800 text-white rounded-lg">
      <h2 className="text-lg font-semibold">Code:</h2>
      <Prism language="javascript" style={dracula}>
        {code}
      </Prism>
    </section>
  );
}

export default Code;
