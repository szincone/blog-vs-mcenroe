import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { withRouter, Route } from "react-router-dom";
import { fetchPosts, fetchPostID, deletePost } from "./actions/index";
import "./App.css";
import MainFeed from "./containers/MainFeed";
import PostView from "./containers/PostView";

class App extends Component {
  state = {};
  componentDidMount() {
    this.props.fetchPosts();
  }
  render() {
    return (
      <Fragment>
        <Route
          exact
          path="/"
          render={props => <MainFeed {...props} {...this.props} />}
        />
        <Route
          exact
          path="/:id"
          render={props => <PostView {...props} {...this.props} />}
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
    deletePost: state.deletePost
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    {
      fetchPosts,
      fetchPostID,
      deletePost
    },
  )(App),
);
