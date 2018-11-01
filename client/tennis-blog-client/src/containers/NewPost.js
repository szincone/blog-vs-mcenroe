import React from "react";
import { Link } from "react-router-dom";

export const NewPost = () => {
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
      {/* {this.props.renderRedirect()} */}
      <header style={newNoteHeaderStyle}>
        <h1 style={newNoteH1Style}>New Note:</h1>
      </header>
      <form
        className="newNoteForm"
        // onSubmit={this.props.submitNewNoteHandler}
      >
        <input
          placeholder="Note Title"
          name="title"
          // onChange={this.props.inputChangeHandler}
          className="inputTitle"
        />
        <textarea
          placeholder="Note Content"
          name="content"
          // onChange={this.props.inputChangeHandler}
          className="inputContent"
        />
        <div className="newNoteFooter" style={footerDivStyle}>
          <Link to="/all-notes">
            <button style={footerButtonsStyle}>Home</button>
          </Link>
          <button
            onClick={() => this.props.savePost(this.state.id)}
            style={footerButtonsStyle}
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewPost;
