import React, { Component } from "react";
import Photo from "./Photo";
import { Link } from "react-router-dom";

class Photos extends Component {
  render() {
    return (
      <React.Fragment>
        <Photo />
        <br />
        <Link to="/add-new">Add Photo</Link>
      </React.Fragment>
    );
  }
}

export default Photos;
