import { SET_REPEAT } from "./eventTypes";

const initialState = {
  repeat: {},
};

export const eventReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_REPEAT:
      return {
        ...state,
        repeat: action.value,
      };

    default:
      return state;
  }
};
