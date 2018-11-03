import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { withRouter, Route, Redirect } from "react-router-dom";
import { fetchPosts, fetchPostID, deletePost } from "./actions/index";
import MainFeed from "./containers/MainFeed.js";
import PostView from "./containers/PostView.js";
import NewPost from "./containers/NewPost.js";
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
  render() {
    return (
      <Fragment>
        <Redirect from="/" to="/all-notes" />
        <Route path="/" component={NavBar} />
        <Route
          exact
          path="/all-notes"
          render={props => <MainFeed {...props} {...this.props} />}
        />
        <Route
          exact
          path="/all-notes/:id"
          render={props => <PostView {...props} {...this.props} />}
        />
        <Route
          path="/create-note"
          render={props => (
            <NewPost
              {...props}
              {...this.props}
              // inputChangeHandler={this.inputChangeHandler}
              // submitNewNoteHandler={this.submitNewNoteHandler}
              // renderRedirect={this.renderRedirect}
            />
          )}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts,
    isFetching: state.isFetching,
    isFetched: state.isFetched,
    hasError: state.hasError,
    deletePost: state.deletePost,
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    {
      fetchPosts,
      fetchPostID,
      deletePost,
    },
  )(App),
);
