import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="navBarDiv">
      <div className="mainNavButtonsDiv">
        <h1>Tennis</h1>
        <h1>Blog 🎾</h1>
        <Link to="/">
          <button>View All</button>
        </Link>
        <Link to="/new-note">
          <button>Create New</button>
        </Link>
      </div>
    </div>
  );
};
