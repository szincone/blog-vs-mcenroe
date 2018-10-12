import React from "react";
import { Link } from "react-router-dom";

class PostView extends React.Component {
  state = {
    title: "",
    content: "",
    score: 0,
    id: Number(
      this.props.location.pathname.substring(
        1,
        this.props.location.pathname.length,
      ),
    ),
    loaded: false,
  };
  componentDidMount() {
    console.log("PROPS", this.props);
    const post = this.props.posts.filter(post => post.id === this.state.id)[0];
    this.setState({
      title: post.title,
      content: post.content,
      score: post.score,
      loaded: true,
    });
  }
  render() {
    const headerStyle = {
      background: "rgb(231, 90, 124)",
      color: "#ffffff",
      fontWeight: "bold",
      display: "flex",
      justifyContent: "center",
      padding: ".5rem 4rem",
      borderRadius: "10px",
      width: "500px",
    };

    const h1Style = {
      textAlign: "center",
      padding: "1rem",
      fontSize: "2rem",
      color: "white",
      textShadow: "#FC0 0px 0 25px",
    };

    const cardStyle = {
      border: "1px solid black",
      height: "500px",
      width: "500px",
      display: "flex",
      flexDirection: "column",
      background: "#ffffff",
      borderRadius: "10px",
    };

    const cardContainerStyle = {
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
      marginTop: "1rem",
    };

    const buttonsDivStyle = {
      display: "flex",
      flexDirection: "row",
      marginTop: "1rem",
    };

    const buttonStyle = {
      display: "flex",
      margin: "0 1rem",
      background: "#e75a7c",
      color: "#ffffff",
      fontWeight: "bold",
      borderRadius: "10px",
      fontSize: "1.2rem",
      border: "1.5px solid white",
      cursor: "pointer",
    };

    return (
      <div className="cardContainer" style={cardContainerStyle}>
        <header className="header" style={headerStyle}>
          <h1 className="title">Individual Post</h1>
        </header>
        {this.props.isFetching ? (
          <h1>Loading...</h1>
        ) : (
          <div style={cardStyle}>
            <div>
              <h1>Title: {this.state.title}</h1>
              <h2>Content: {this.state.content}</h2>
              <h3>Score: {this.state.score}</h3>
            </div>
          </div>
        )}
        <div className="singlePostButtonsDiv" style={buttonsDivStyle}>
          <Link to="/">
            <button style={buttonStyle}>Home</button>
          </Link>
          <button
            onClick={() => this.props.deletePost(this.state.id)}
            style={buttonStyle}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default PostView;
