import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";

function Layout() {
  return (
    <div className="flex">
      <div className="w-64 h-screen bg-gray-800 text-white fixed top-0 left-0 flex flex-col">
        <Navigation />
      </div>
      <div className="w-full ml-64 p-6 overflow-auto h-screen">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
