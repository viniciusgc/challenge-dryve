import { ActionTypes as types } from "./constants";

export const initialState = {
  personalData: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
