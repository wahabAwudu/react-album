import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";

class PhotoDetail extends Component {
  componentDidMount() {
    axios
      .get(
        "https://jsonplaceholder.typicode.com/photos/" +
          this.props.match.params.id
      )
      .then(res => {
        this.props.setPhoto(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    const photo = this.props.photo;
    return (
      <div className="row mt-5">
        <div className="col-md-6 offset-md-3">
          <h2>View Photo</h2>
          <img src={photo.url} alt={photo.title} height="200" width="200" />
          <br />
          <h5>{photo.title}</h5>
          <br />
          <br />
          <Link to="/">Album Home</Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    photo: state.photosReducer.photo
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setPhoto: photo => dispatch({ type: "SET_PHOTO", payload: photo })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoDetail);
