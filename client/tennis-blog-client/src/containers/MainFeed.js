import React from "react";
import Post from "../components/post/Post.js";
import { NavLink } from "react-router-dom";

function MainFeed(props) {
  return (
    <div className="main-container">
      <div className="posts-container">
        {props.posts.map(post => (
          <NavLink to={`/all-notes/${post.id}`} key={post.id}>
            <Post {...post} />
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default MainFeed;
