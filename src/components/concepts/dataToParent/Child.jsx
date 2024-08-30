/* eslint-disable react/prop-types */

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
