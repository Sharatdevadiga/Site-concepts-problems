import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div className="flex flex-col h-screen border-r-2 p-4 gap-3 ">
      <NavLink to="/" className="sticky border-b-4">
        Navigation
      </NavLink>
      <h3 className="font-bold">---CONCEPTS---</h3>
      <NavLink className="hover:bg-blue-500" to="/question1">
        Debouncer
      </NavLink>
      <NavLink className="hover:bg-blue-500" to="/question2">
        CompoundComponent
      </NavLink>
      <NavLink className="hover:bg-blue-500" to="/question3">
        Custom fetcher
      </NavLink>
      <NavLink className="hover:bg-blue-500" to="/question4">
        Passing Data to Parent
      </NavLink>
      <br />
      <h3 className="font-bold">---PROBLEMS---</h3>
      <NavLink className="hover:bg-blue-500" to="/question5">
        Generate table
      </NavLink>
      <NavLink className="hover:bg-blue-500" to="/question6">
        Question6
      </NavLink>
    </div>
  );
}

export default Navigation;
