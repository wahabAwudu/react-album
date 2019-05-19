import React, { Component } from "react";
import Photo from "./Photo";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";

class Photos extends Component {
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then(res => {
        this.props.setPhotos(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <React.Fragment>
        <h1>Album of Photos</h1>
        <i>Photos: {this.props.archive} +</i>
        {this.props.photos.map(photo => (
          <div>
            <Photo
              id={photo.id}
              title={photo.title}
              url={photo.thumbnailUrl}
              key={photo.id}
            />
            <br />
          </div>
        ))}
        <br />
        <Link to="/add-new">Add Photo</Link>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    photos: state.photosReducer.photos,
    archive: state.photosReducer.archive
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setPhotos: photos => dispatch({ type: "SET_PHOTOS", payload: photos })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Photos);
