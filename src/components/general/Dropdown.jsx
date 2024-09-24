/* eslint-disable react/prop-types */
import { IoIosArrowDropdown } from "react-icons/io";
import { IoIosArrowDropup } from "react-icons/io";

import { useState } from "react";

function Dropdown({ title = "Concept-x", children }) {
  const [isOpen, setIsOpen] = useState(false);
  function handleClick() {
    setIsOpen((open) => !open);
  }
  return (
    <div className={`${isOpen ? "mb-6" : ""}`}>
      <div
        className={`flex items-center cursor-pointer border-2 border-slate-600 p-2 ${
          isOpen ? "mb-3" : ""
        }`}
        onClick={handleClick}
      >
        <span className=" font-bold w-full   text-left">
          {title.substring(0, 20)}{" "}
        </span>
        <span>{isOpen ? <IoIosArrowDropup /> : <IoIosArrowDropdown />}</span>
      </div>
      {isOpen ? (
        <div className="flex flex-col gap-2 mx-2 ">{children}</div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Dropdown;
