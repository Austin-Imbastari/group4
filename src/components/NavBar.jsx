import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <NavLink to="/" className={({ isActive }) => (isActive ? "text-blue-500" : "")}>
        Home
      </NavLink>

      <p>Navbar</p>
    </nav>
  );
};

export default NavBar;
