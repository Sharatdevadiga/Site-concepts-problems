/* eslint-disable react/prop-types */
function Card({ entry, index }) {
  return (
    <div className="relative max-w-44">
      <img src={entry.url} className="opacity-50 rounded-lg" />
      <p className="absolute bottom-0 z-5 p-3">Fetched Image: {index + 1}</p>
    </div>
  );
}

export default Card;
