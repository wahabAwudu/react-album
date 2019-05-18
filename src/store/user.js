const user_state = {
  name: null,
  id: null,
  token: null
};

const userReducer = (state = user_state, action) => {
  switch (action.type) {
    case "SET_USER": {
      return {
        ...state,
        name: action.payload
      };
    }
    default: {
      return state;
    }
  }
};

export default userReducer;
