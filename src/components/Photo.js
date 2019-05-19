import React, { Component } from "react";
import Proptypes from "prop-types";
import { Link } from "react-router-dom";

class Photo extends Component {
  static propTypes = {
    id: Proptypes.number.isRequired,
    title: Proptypes.string.isRequired,
    url: Proptypes.string.isRequired
  };

  static defaultProps = {
    id: 100000,
    title: "Default Image",
    url: "https://wahabawudu.com/logo.png"
  };

  render() {
    return (
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="row">
            <div className="col-md-4">
              <div className="img img-responsive">
                <img src={this.props.url} alt={this.props.url} />
              </div>
            </div>

            <div className="col-md-7 offset-md-1">
              <h3 className="text-primary">
                <Link to={"/" + this.props.id}>{this.props.title}</Link>
              </h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Photo;
