const initial_state = {
  photos: [],
  photo: {},
  archive: 0
};

const photosReducer = (state = initial_state, action) => {
  switch (action.type) {
    case "SET_PHOTOS": {
      return {
        ...state,
        photos: action.payload,
        archive: action.payload.length
      };
    }

    case "SET_PHOTO": {
      return {
        ...state,
        photo: action.payload
      };
    }

    case "RETRIEVE_PHOTO": {
      return {
        ...state,
        photo: state.photos.find(photo => photo.id === action.payload)
      };
    }

    default: {
      return state;
    }
  }
};

export default photosReducer;
