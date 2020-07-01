import reducer, { initialState } from "./reducers";
import { ActionTypes as types } from "./constants";

test("should be loading emittings props", () => {
  const before = initialState;

  const action = { type: types.FETCH_EMITTING, payload: [] };

  const after = {
    emittings: [],
    personalData: {},
  };
  expect(reducer(before, action)).toEqual(after);
});
