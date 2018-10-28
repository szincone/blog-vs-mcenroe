import React, { Component } from "react";

export const NewPost = () => {
  return (
    <div className="newNoteMainDiv">
      {this.props.renderRedirect()}
      <h2>New Note:</h2>
      <form className="newNoteForm" onSubmit={this.props.submitNewNoteHandler}>
        <input
          placeholder="Note Title"
          name="title"
          onChange={this.props.inputChangeHandler}
          className="inputTitle"
        />
        <textarea
          placeholder="Note Content"
          name="content"
          onChange={this.props.inputChangeHandler}
          className="inputContent"
        />
        <button>Save</button>
      </form>
    </div>
  );
};

export default NewPost;
