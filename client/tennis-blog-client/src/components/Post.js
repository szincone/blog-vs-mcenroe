import React from "react";

const divStyle = {
  border: "1px solid black",
  WebkitTransition: "all", // note the capital 'W' here
  msTransition: "all", // 'ms' is the only lowercase vendor prefix
  width: "300px",
  height: "225px",
  textAlign: "center",
  margin: "1rem",
  fontSize: "1.5rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  boxShadow: "#E75A7C 10px 10px",
};

function Post(props) {
  return (
    <div style={divStyle}>
      <h1>
        Title:{" "}
        {props.title.length > 12
          ? props.title.substring(0, 12) + "..."
          : props.title}
      </h1>
      <h2 style={{ margin: "1rem 0" }}>
        Content:{" "}
        {props.content.length > 50
          ? props.content.substring(0, 50) + "..."
          : props.content}
      </h2>
      <h3>Score: {props.score}</h3>
    </div>
  );
}

export default Post;
