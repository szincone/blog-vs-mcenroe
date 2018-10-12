import React from "react";
import Post from "../components/Post.js";
import { NavLink } from "react-router-dom";

function MainFeed(props) {
  const h1Style = {
    textAlign: "center",
    padding: "1rem",
    fontSize: "2rem",
    color: "white",
    textShadow: "#FC0 0px 0 25px",
  };
  return (
    <div className="main-container">
      <h1 style={h1Style}>Tennis-Blog</h1>
      <div className="posts-container">
        {props.posts.map(post => (
          <NavLink to={`/${post.id}`} key={post.id}>
            <Post {...post} />
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default MainFeed;
