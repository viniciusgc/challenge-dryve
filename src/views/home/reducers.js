import { ActionTypes as types } from "./constants";

export const initialState = {
  emittings: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_EMITTING:
      return {
        ...state,
        emittings: action.payload,
      };

    default:
      return state;
  }
};
