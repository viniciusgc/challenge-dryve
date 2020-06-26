import { ActionTypes as types } from "./constants";

export const initialState = {
  personalData: {},
  emittings: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_EMITTING:
      return {
        ...state,
        emittings: action.payload,
      };
    case types.FETCH_PERSONAL_DATA_BY_ID:
      return {
        ...state,
        personalData: action.payload,
      };

    default:
      return state;
  }
};
