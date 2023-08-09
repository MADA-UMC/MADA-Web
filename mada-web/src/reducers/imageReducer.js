import { SET_IMAGE_NAME } from './imageActionTypes';

const initialState = {
  imageName: '',
};

const imageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IMAGE_NAME:
      return {
        ...state,
        imageName: action.payload,
      };
    default:
      return state;
  }
};

export default imageReducer;