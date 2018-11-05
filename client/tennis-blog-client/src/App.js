import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { withRouter, Route, Redirect } from "react-router-dom";
import {
  fetchPosts,
  fetchPostID,
  addNewPost,
  deletePost,
  modifyPost,
} from "./actions/index";
import MainFeed from "./containers/MainFeed.js";
import PostView from "./containers/PostView.js";
import NewPost from "./containers/NewPost.js";
import EditPost from "./containers/EditPost.js";
import { NavBar } from "./components/navbar/NavBar.js";
import "./App.css";

class App extends Component {
  state = {
    // redirect
    redirect: false,
    // newpost
    title: "",
    content: "",
  };

  componentDidMount() {
    this.props.fetchPosts();
  }

  inputChangeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitNewPostHandler = event => {
    event.preventDefault();
    const addedPost = {
      title: this.state.title,
      content: this.state.content,
    };
    this.props.addNewPost(addedPost);
    this.setState({ title: "", content: "" });
    setTimeout(() => this.setState({ redirect: true }), 200);
  };

  editPostHandler = event => {
    event.preventDefault();
    const id = parseInt(this.props.location.pathname.match(/\d+$/)[0], 10);
    const time_stamp = new Date();
    console.log("TIME STAMP", time_stamp);
    const editedPost = {
      title: this.state.title,
      content: this.state.content,
      score: 0,
      time_stamp: time_stamp,
      id: id,
    };
    console.log("ID", id, "editedPost", editedPost);
    this.props.modifyPost(editedPost);
    this.setState({ title: "", content: "" });
    // setTimeout(() => this.setState({ redirect: true }), 200);
  };

  // redirect
  renderRedirect = () => {
    if (this.state.redirect) {
      this.setState({ redirect: false });
      window.location.reload();
      return <Redirect to="/all-notes" />;
    } else {
      // do nothing
    }
  };

  render() {
    if (!this.props.location.pathname.includes("note")) {
      return <Redirect from="/" to="/all-notes" />;
    } else {
      return (
        <Fragment>
          <Route path="/" component={NavBar} />
          <Route
            exact
            path="/all-notes"
            render={props => <MainFeed {...props} {...this.props} />}
          />
          <Route
            exact
            path="/all-notes/:id"
            render={props => (
              <PostView
                {...props}
                {...this.props}
                renderRedirect={this.renderRedirect}
              />
            )}
          />
          <Route
            path="/create-note"
            render={props => (
              <NewPost
                {...props}
                {...this.props}
                inputChangeHandler={this.inputChangeHandler}
                submitNewPostHandler={this.submitNewPostHandler}
                renderRedirect={this.renderRedirect}
              />
            )}
          />
          <Route
            path="/edit-note"
            render={props => (
              <EditPost
                {...props}
                {...this.props}
                inputChangeHandler={this.inputChangeHandler}
                editPostHandler={this.editPostHandler}
                renderRedirect={this.renderRedirect}
              />
            )}
          />
        </Fragment>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts,
    isFetching: state.isFetching,
    isFetched: state.isFetched,
    hasError: state.hasError,
    addNewPost: state.addNewPost,
    deletePost: state.deletePost,
    modifyPost: state.modifyPost,
    redirect: state.redirect,
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    {
      fetchPosts,
      fetchPostID,
      addNewPost,
      deletePost,
      modifyPost,
    },
  )(App),
);
