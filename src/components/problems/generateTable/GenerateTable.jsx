import { useState } from "react";
import Code from "../../code/Code";

const code = `
import { useState } from "react";

function GenerateTable() {
  const [tableData, setTableData] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const rows = formData.get("row");
    const cols = formData.get("col");

    let data = [];
    let number = 1;
    for (let r = 0; r < rows; r++) {
      data[r] = [];
      for (let c = 0; c < cols; c++) {
        data[r][c] = number;
        number++;
      }
    }

    // reverse the odd
    for (let r = 1; r < rows; r += 2) {
      data[r].reverse();
    }

    // transpose
    for (let r = 0; r < rows; r++) {
      for (let c = r + 1; c < cols; c++) {
        [data[r][c], data[c][r]] = [data[c][r], data[r][c]];
      }
    }

    setTableData(data);
  }

  return (
    <dmain className="space-y-12">
      <h1>Generate table</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center gap-4 border-slate-400 border-2 p-4 min-w-60"
      >
        <div>
          <label htmlFor="Number of rows"></label>
          <input
            type="number"
            required
            name="row"
            placeholder="rows"
            className="bg-slate-900 rounded-lg p-2 border-2 border-slate-700"
          />
        </div>
        <div>
          <label htmlFor="Number of columns"></label>
          <input
            type="number"
            required
            name="col"
            placeholder="cols"
            className="bg-slate-900 rounded-lg p-2 border-2 border-slate-700"
          />
        </div>
        <button className="w-36 p-2 rounded-lg bg-blue-600" type="submit">
          Submit
        </button>
      </form>

      <table className="border-slate-200 border-2 w-full">
        {tableData?.map((row, r) => (
          <tr key={r} className="w-full">
            {row.map((cell, c) => (
              <td className="border-slate-200 border-2 p-2" key={c}>
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </table>
    </dmain>
  );
}

export default GenerateTable;

`;

function GenerateTable() {
  const [tableData, setTableData] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const rows = formData.get("row");
    const cols = formData.get("col");

    let data = [];
    let number = 1;
    for (let r = 0; r < rows; r++) {
      data[r] = [];
      for (let c = 0; c < cols; c++) {
        data[r][c] = number;
        number++;
      }
    }

    // reverse the odd
    for (let r = 1; r < rows; r += 2) {
      data[r].reverse();
    }

    // transpose
    for (let r = 0; r < rows; r++) {
      for (let c = r + 1; c < cols; c++) {
        [data[r][c], data[c][r]] = [data[c][r], data[r][c]];
      }
    }

    setTableData(data);
  }

  return (
    <main className="space-y-12">
      <h1>Generate table</h1>
      <p>
        Write a React component that generates a table based on user input for
        the number of rows and columns. The table should be populated with
        sequential numbers, reversing the order of numbers in every odd-numbered
        row, and then transposing the matrix before displaying it.
      </p>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center gap-4 border-slate-400 border-2 p-4 min-w-60"
      >
        <div>
          <label htmlFor="Number of rows"></label>
          <input
            type="number"
            required
            name="row"
            placeholder="rows"
            className="bg-slate-900 rounded-lg p-2 border-2 border-slate-700"
          />
        </div>
        <div>
          <label htmlFor="Number of columns"></label>
          <input
            type="number"
            required
            name="col"
            placeholder="cols"
            className="bg-slate-900 rounded-lg p-2 border-2 border-slate-700"
          />
        </div>
        <button className="w-36 p-2 rounded-lg bg-blue-600" type="submit">
          Submit
        </button>
      </form>

      <table className="border-slate-200 border-2 w-full">
        {tableData?.map((row, r) => (
          <tr key={r} className="w-full">
            {row.map((cell, c) => (
              <td className="border-slate-200 border-2 p-2" key={c}>
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </table>

      <Code code={code}></Code>
    </main>
  );
}

export default GenerateTable;
