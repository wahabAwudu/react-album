import React, { createContext, useState } from "react";

export const Context = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "INITIAL_PHOTOS": {
      return {
        ...state,
        photos: action.payload
      };
    }
    case "ADD_PHOTO": {
      return {
        ...state,
        photos: state[0].photos.push(action.payload)
      };
    }
    default:
      return state;
  }
};

const Provider = props => {
  const state = useState({
    photos: [
      {
        id: 1,
        url: "https://bitnob.com/src/assets/img/favicon.png",
        title: "Bitnob Image"
      },
      {
        id: 2,
        url: "https://bitnob.com/src/assets/img/favicon.png",
        title: "Luno Image"
      },
      {
        id: 3,
        url: "https://bitnob.com/src/assets/img/favicon.png",
        title: "Coinbase Image"
      }
    ],
    dispatch: action => reducer(state, action)
  });

  return (
    <div>
      <Context.Provider value={state}>{props.children}</Context.Provider>
    </div>
  );
};

export default Provider;
