import { ActionTypes as types } from "./constants";

export const initialState = {
  cars: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_CARS:
      return {
        ...state,
        cars: action.payload,
      };

    default:
      return state;
  }
};
