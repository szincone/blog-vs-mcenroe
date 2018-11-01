import React from "react";

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
        <button>Save</button>
      </form>
    </div>
  );
};

export default NewPost;
