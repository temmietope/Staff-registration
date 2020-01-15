import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <nav>
      <Link to="/create" className="link">
        Register Staff
      </Link>
      <Link to="/" className="link">
        Home Page
      </Link>
    </nav>
  );
};

export default Navigation;
