import React from "react";
import { NavLink } from "react-router-dom";

export default function NavItem() {
  return (
    <>
      <ul className="navbar-nav ml-auto w-100">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/livetv">
            Live Tv
          </NavLink>
        </li>
      </ul>
    </>
  );
}
