import React, { Component } from "react";
import Photos from "../components/Photos";
import { connect } from "react-redux";
import axios from "axios";

class HomePage extends Component {
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(res => {
        this.props.setPosts(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <h1>Posts Archive: {this.props.posts.archive}</h1>
        {this.props.posts.posts.map(post => (
          <div className="container">
            <h3 className="text-primary">{post.title}</h3>
            <p>{post.body.substring(0, 50)}</p>
            <br />
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.userReducer,
    posts: state.postsReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setName: name => dispatch({ type: "SET_USER", payload: name }),
    setPosts: posts => dispatch({ type: "SET_POSTS", payload: posts })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
