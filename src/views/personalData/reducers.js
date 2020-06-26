import { ActionTypes as types } from "./constants";

export const initialState = {
  users: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_PERSONAL_DATA:
      return {
        ...state,
        users: action.payload,
      };

    default:
      return state;
  }
};
