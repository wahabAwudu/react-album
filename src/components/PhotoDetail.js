import React, { useContext } from "react";
import { Context } from "../store";
import { Link } from "react-router-dom";

const PhotoDetail = props => {
  const id = props.match.params.id;
  const store = useContext(Context);
  const { photos } = store[0];
  const photo = photos.find(photo => photo.id == id);

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
};

export default PhotoDetail;
