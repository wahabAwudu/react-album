import React, { Component } from "react";
import axios from "axios";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "INITIAL_PHOTOS": {
      return {
        ...state,
        photos: [action.payload, ...state.photos]
      };
    }
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    photos: [],
    dispatch: action => this.setState(state => reducer(state, action))
  };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then(res => {
        this.setState({ photos: res.data });
        console.log("success");
      })
      .catch(err => {
        console.log("error");
      });
  }

  render() {
    return (
      <div>
        <Context.Provider value={this.state}>
          {this.props.children}
        </Context.Provider>
      </div>
    );
  }
}

export const Consumer = Context.Consumer;
