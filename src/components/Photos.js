import React, { useContext } from "react";
import Photo from "./Photo";
import { Context } from "../store";
import { Link } from "react-router-dom";

const Photos = props => {
  const store = useContext(Context);
  const { photos } = store[0];

  return (
    <React.Fragment>
      {photos.map(photo => (
        <Photo
          image={photo.url}
          title={photo.title}
          id={photo.id}
          key={photo.id}
        />
      ))}
      <br />
      <Link to="/add-new">Add Photo</Link>
    </React.Fragment>
  );
};

export default Photos;
