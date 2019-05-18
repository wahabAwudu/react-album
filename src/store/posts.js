const posts_state = {
  posts: [],
  archive: 0
};

const postsReducer = (state = posts_state, action) => {
  switch (action.type) {
    case "SET_POSTS": {
      return {
        ...state,
        posts: action.payload,
        archive: action.payload.length
      };
    }
    default: {
      return state;
    }
  }
};

export default postsReducer;
