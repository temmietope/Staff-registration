import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <nav>
      <h2>
        <Link to="/all-staff" className="brandname">
          ADDIC
        </Link>
      </h2>
      <NavLink to="/create" className="link" activeClassName="active">
        Add Staff
      </NavLink>
      <NavLink to="/about" className="link" activeClassName="active">
        About
      </NavLink>
      <NavLink to="/all-staff" className="link" activeClassName="active">
        Stafflist
      </NavLink>
    </nav>
  );
};

export default Navigation;
