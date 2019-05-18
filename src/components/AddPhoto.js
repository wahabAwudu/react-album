import React, { Component } from "react";
import { Link } from "react-router-dom";

class AddPhoto extends Component {
  // onUrlChanged = e => (form.url = e.target.value);
  // onTitleChanged = e => (form.title = e.target.value);

  // addPhoto = e => {
  //   e.preventDefault();
  //   props.history.push("/");
  // };
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <h1>Add Photo</h1>
          <form>
            <div className="form-group">
              <label htmlFor="url">Url</label>
              <input type="text" name="url" className="form-control" />
            </div>

            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input type="text" name="title" className="form-control" />
            </div>

            <input type="submit" value="Add Photo +" />
          </form>
          <br />
          <Link to="/">Home</Link>
        </div>
      </React.Fragment>
    );
  }
}

export default AddPhoto;
