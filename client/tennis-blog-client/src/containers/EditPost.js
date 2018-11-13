import React from "react";
import { Link } from "react-router-dom";

export const EditPost = props => {
  const newNoteDivStyle = {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    marginLeft: "8rem",
    marginTop: "1rem",
  };
  const newNoteHeaderStyle = {
    background: "rgb(231, 90, 124)",
    color: "#ffffff",
    fontWeight: "bold",
    display: "flex",
    justifyContent: "center",
    padding: ".5rem 4rem",
    width: "500px",
    border: "1px solid black",
    borderBottom: "none",
    borderRadius: "3px 3px 0 0",
  };
  const newNoteH1Style = {
    textAlign: "center",
    fontSize: "2rem",
    color: "white",
  };
  const inputsDiv = {
    border: "1px solid black",
    display: "flex",
    minHeight: "28rem",
    flexDirection: "column",
  };
  const titleInputStyle = {
    marginTop: "1rem",
    height: "2rem",
    border: "1px solid black",
    borderRight: "none",
    borderLeft: "none",
  };
  const contentInputStyle = {
    minHeight: "14rem",
    borderBottom: "1px solid black",
    borderTop: "none",
    borderRight: "none",
    borderLeft: "none",
  };
  const footerDivStyle = {
    display: "flex",
    flexDirection: "row",
    background: "#2ca58d",
    color: "#ffffff",
    fontWeight: "bold",
    justifyContent: "center",
    padding: ".5rem 4rem",
    width: "500px",
    border: "1px solid black",
    borderTop: "none",
    borderRadius: "0 0 3px 3px",
  };
  const footerButtonsStyle = {
    display: "flex",
    margin: "0 1rem",
    background: "#e75a7c",
    color: "#ffffff",
    fontWeight: "bold",
    borderRadius: "3px",
    fontSize: "1.2rem",
    border: "1.5px solid white",
    cursor: "pointer",
  };
  return (
    <div className="newNoteMainDiv" style={newNoteDivStyle}>
      {props.renderRedirect()}
      <header style={newNoteHeaderStyle}>
        <h1 style={newNoteH1Style}>Modify Note:</h1>
      </header>
      <form className="newNoteForm" onSubmit={props.editPostHandler}>
        <div style={inputsDiv}>
          <input
            placeholder="New Note Title"
            name="title"
            onChange={props.inputChangeHandler}
            className="inputTitle"
            style={titleInputStyle}
          />
          <textarea
            placeholder="New Note Content"
            name="content"
            onChange={props.inputChangeHandler}
            className="inputContent"
            style={contentInputStyle}
          />
        </div>
        <div className="newNoteFooter" style={footerDivStyle}>
          <Link to="/">
            <button style={footerButtonsStyle}>Home</button>
          </Link>
          <button style={footerButtonsStyle}>Modify</button>
        </div>
      </form>
    </div>
  );
};

export default EditPost;
