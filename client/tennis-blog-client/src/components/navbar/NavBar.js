import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="navBarDiv">
      <div className="mainNavButtonsDiv">
        <h1>Blog</h1>
        <h1>vs</h1>
        <h1>
          McEnroe{" "}
          <span role="img" aria-label="tennis emoji">
            🎾
          </span>
        </h1>
        <Link to="/blog-vs-mcenroe">
          <button>View All</button>
        </Link>
        <Link to="/create-note">
          <button>Create New</button>
        </Link>
      </div>
    </div>
  );
};
