import { NavLink } from "react-router-dom";
import Dropdown from "./general/Dropdown";
import NavLinkButton from "./problems/generateTable/NavLinkButton";

function Navigation() {
  return (
    <div className="flex flex-col h-screen border-r-2 p-4 gap-3 ">
      <NavLink to="/" className="sticky border-b-4 border-slate-600">
        Navigation
      </NavLink>

      <Dropdown title="Concepts">
        <NavLinkButton to="/debouncedValue" title="Debouncer" />
        <NavLinkButton to="/debouncedFunction" title="Debounced Function" />
        <NavLinkButton to="/throttledValue" title="Throttled Value" />
        <NavLinkButton to="/throttledFunction" title="Throttled Function" />
        <NavLinkButton to="/compoundComponent" title="Compound Component" />
        <NavLinkButton to="/customFetcher" title="Custom fetcher" />
        <NavLinkButton
          to="/childToParentCommunication"
          title="Passing Data to Parent"
        />
      </Dropdown>

      <Dropdown title="Problems">
        <NavLinkButton to="/question1" title="Generate table" />
        <NavLinkButton to="/question2" title="Counter" />
        <NavLinkButton to="/question3" title="Stopwatch" />
        <NavLinkButton to="/question4" title="Clock" />
        <NavLinkButton to="/Slides" title="Slides" />
        <NavLinkButton to="/quiz" title="Quiz 1" />
      </Dropdown>
    </div>
  );
}

export default Navigation;
