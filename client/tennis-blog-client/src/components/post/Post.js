import React from "react";

function Post(props) {
  const divStyle = {
    border: "1px solid black",
    WebkitTransition: "all", // note the capital 'W' here
    msTransition: "all", // 'ms' is the only lowercase vendor prefix
    width: "300px",
    height: "225px",
    textAlign: "center",
    margin: "1rem 1.5rem",
    padding: "1rem",
    borderRadius: "3px",
    fontSize: "1.5rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    boxShadow: "#2CA58D 10px 10px",
  };
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
        {props.content.length > 45
          ? props.content.substring(0, 45) + "..."
          : props.content}
      </h2>
      <h3>Score: {props.score}</h3>
    </div>
  );
}

export default Post;
