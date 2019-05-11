import React, { Component } from "react";
import Photo from "./Photo";
import { Consumer } from "../store";

class Photos extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { photos } = value;
          return (
            <React.Fragment>
              {photos.map(photo => (
                <Photo
                  image={photo.image}
                  title={photo.title}
                  id={photo.id}
                  key={photo.id}
                />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Photos;
