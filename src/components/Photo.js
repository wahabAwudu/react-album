import React, { Component } from "react";
import Proptypes from "prop-types";
import { Link } from "react-router-dom";

class Photo extends Component {
  static propTypes = {
    image: Proptypes.string.isRequired,
    title: Proptypes.string.isRequired
  };

  static defaultProps = {
    image: "https://me.com/logo.png",
    title: "me title"
  };

  render() {
    const { title, image, id } = this.props;

    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-6 offset-xs-3">
            <div className="card card-body mb-3">
              <div className="row">
                <div className="col-xs-4">
                  <Link to={"/photos/" + id}>
                    <img src={image} alt="img" />
                  </Link>
                </div>
                <div className="col-xs-8">
                  <Link to={"/photos/" + id}>
                    <p className="text-primary">{title}</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Photo;
