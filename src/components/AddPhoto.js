import React, { useContext } from "react";
import { Context } from "../store";
import { Link } from "react-router-dom";

const AddPhoto = props => {
  const store = useContext(Context);

  let form = {
    url: "",
    title: ""
  };

  const onUrlChanged = e => (form.url = e.target.value);
  const onTitleChanged = e => (form.title = e.target.value);

  const addPhoto = e => {
    e.preventDefault();
    const { dispatch } = store[0];
    form.id = 6;
    dispatch({ type: "ADD_PHOTO", payload: form });
    props.history.push("/");
  };

  return (
    <React.Fragment>
      <div className="container">
        <h1>Add Photo</h1>
        <form onSubmit={addPhoto}>
          <div className="form-group">
            <label htmlFor="url">Url</label>
            <input
              type="text"
              name="url"
              className="form-control"
              onChange={onUrlChanged}
            />
          </div>

          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              className="form-control"
              onChange={onTitleChanged}
            />
          </div>

          <input type="submit" value="Add Photo +" />
        </form>{" "}
        <br />
        <Link to="/">Home</Link>
      </div>
    </React.Fragment>
  );
};

export default AddPhoto;
