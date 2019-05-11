import React, { Component } from "react";
import { Consumer } from "../store";
import { Link } from "react-router-dom";

class PhotoDetail extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const id = this.props.match.params.id;
          const { photos } = value;
          const photo = photos.find(photo => photo.id === id);
          return (
            <div className="container">
              <div className="row">
                <div className="col-md-6 offset-md-3">
                  <div className="card card-body mb-3">
                    <div className="row">
                      <div className="col-md-6 offset-md-3">
                        <img src={photo.url} alt="img" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 offset-md-3">
                        <p className="text-primary">{photo.title}</p>
                      </div>
                    </div>
                  </div>
                  <Link to="/">Album Home</Link>
                </div>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default PhotoDetail;
