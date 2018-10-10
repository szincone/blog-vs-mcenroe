import React from "react";

const divStyle = {
  border: "1px solid black",
  WebkitTransition: "all", // note the capital 'W' here
  msTransition: "all", // 'ms' is the only lowercase vendor prefix
  width: "300px",
  height: "250px",
  textAlign: "center",
  margin: "1rem",
};

function Post(props) {
  return (
    <div style={divStyle}>
      <h1>Title: {props.title}</h1>
      <h2>Content: {props.content}</h2>
      <h3>Score: {props.score}</h3>
    </div>
  );
}

export default Post;
