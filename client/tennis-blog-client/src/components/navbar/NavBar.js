import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="navBarDiv">
      <h1>Tennis</h1>
      <h1>Blog</h1>
      <div className="mainNavButtonsDiv">
        <Link to="/">
          <button>View Your Notes</button>
        </Link>
        <Link to="/new-note">
          <button>+ Create New Note</button>
        </Link>
      </div>
    </div>
  );
};
