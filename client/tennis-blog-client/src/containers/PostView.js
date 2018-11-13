import React from "react";
import { Link } from "react-router-dom";

class PostView extends React.Component {
  state = {
    title: "",
    content: "",
    score: 0,
    // gets number at end of url string returns object, 0 index
    // is our number, turn into number
    id: parseInt(this.props.location.pathname.match(/\d+$/)[0], 10),
    loaded: false,
  };

  componentDidMount() {
    const post = this.props.posts.filter(post => post.id === this.state.id);
    // access first item in post object which is our matching post
    this.setState({
      title: post[0].title,
      content: post[0].content,
      score: post[0].score,
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
      width: "500px",
      border: "1px solid black",
      borderBottom: "none",
      borderRadius: "3px 3px 0 0",
    };

    const h1Style = {
      textAlign: "center",
      fontSize: "2rem",
      color: "white",
    };

    const h2Style = {
      fontSize: "1.5rem",
      margin: "1rem 0",
    };

    const cardStyle = {
      border: "1px solid black",
      minHeight: "500px",
      width: "500px",
      display: "flex",
      flexDirection: "column",
      background: "#ffffff",
      padding: "1rem",
      textAlign: "center",
    };

    const cardContainerStyle = {
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
      margin: "1rem 0 1rem 10rem",
    };

    const cardBg = {
      background: "white",
      padding: "0 2rem",
    };

    const buttonsDivStyle = {
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

    const buttonStyle = {
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
    const deleteButtonStyle = {
      display: "flex",
      margin: "0 1rem",
      background: "#ffffff",
      color: "#e75a7c",
      fontWeight: "bold",
      borderRadius: "3px",
      fontSize: "1.2rem",
      border: "1.5px solid #e75a7c",
      cursor: "pointer",
    };
    return (
      <div className="cardContainer" style={cardContainerStyle}>
        {this.props.renderRedirect()}
        <div className="cardBg" style={cardBg}>
          <header className="header" style={headerStyle}>
            <h1 className="title" style={h1Style}>
              Individual Post
            </h1>
          </header>
          {this.props.isFetching ? (
            <h1>Loading...</h1>
          ) : (
            <div style={cardStyle}>
              <div>
                <h2 style={h2Style}>Title: {this.state.title}</h2>
                <h2 style={h2Style}>Content: {this.state.content}</h2>
                <h2 style={h2Style}>Score: {this.state.score}</h2>
              </div>
            </div>
          )}
          <div className="singlePostButtonsDiv" style={buttonsDivStyle}>
            <Link to="/">
              <button style={buttonStyle}>Home</button>
            </Link>
            <Link to={`/edit-note/${this.state.id}`}>
              <button className="editButton" style={buttonStyle}>
                Edit
              </button>
            </Link>
            <button
              onClick={this.props.deletePostHandler}
              style={deleteButtonStyle}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default PostView;
