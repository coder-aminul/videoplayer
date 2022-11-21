import React from "react";
import { NavLink } from "react-router-dom";
import NavItem from "./NavItem";

export default function NavContainer() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          Live Tv
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse w-100 mr-auto justify-content-end "
          id="navbarSupportedContent"
        >
          <NavItem />
        </div>
      </div>
    </nav>
  );
}
