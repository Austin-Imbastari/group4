import React from "react";
import { NavLink } from "react-router-dom";
import './NavBar.css';

const NavBar = () => {
  return (
    <div className="nav-all">
      <nav className="nav-left">
        <NavLink to="/" style={{ textDecoration: 'none' }} className={({ isActive }) => (isActive ? "text-blue-500" : "")}>
          Ember
        </NavLink>
      </nav>
      <nav className="nav-middle">
        <NavLink to="/" style={{ textDecoration: 'none' }} className={({ isActive }) => (isActive ? "text-blue-500" : "")}>
          About Us
        </NavLink>
        <NavLink to="/" style={{ textDecoration: 'none' }} className={({ isActive }) => (isActive ? "text-blue-500" : "")}>
          Events
        </NavLink>
      </nav>
      <nav className="nav-right">
        <NavLink to="/" style={{ textDecoration: 'none' }} className={({ isActive }) => (isActive ? "text-blue-500" : "")}>
          Sign in
        </NavLink>
      </nav>
    </div>
  );
};

export default NavBar;
