/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

function NavLinkButton({ to, title }) {
  return (
    <NavLink
      className="hover:bg-blue-500 border-2 border-slate-600 px-2"
      to={to}
    >
      {title}
    </NavLink>
  );
}

export default NavLinkButton;
