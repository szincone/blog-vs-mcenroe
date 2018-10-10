import React from "react";
import Post from "../components/Post.js";
import { NavLink } from "react-router-dom";

function MainFeed(props) {
  return (
    <div className="main-container">
      {props.posts.map(post => (
        <NavLink to={`/${post.id}`} key={post.id}>
          <Post {...post} />
        </NavLink>
      ))}
    </div>
  );
}

export default MainFeed;
