import reducer, { initialState } from "./reducers";
import { ActionTypes as types } from "./constants";

test("should be loading users props", () => {
  const before = initialState;

  const action = { type: types.FETCH_PERSONAL_DATA, payload: [] };

  const after = {
    users: [],
  };
  expect(reducer(before, action)).toEqual(after);
});

test("should be return  users data", () => {
  const before = initialState;

  const action = {
    type: types.FETCH_PERSONAL_DATA,
    payload: [
      {
        name: "Name test",
        rg: "99.999.999-9",
        emmiting: "PM",
        date: "27/06/2020",
        gender: "masculino",
      },
    ],
  };

  const after = {
    users: [
      {
        name: "Name test",
        rg: "99.999.999-9",
        emmiting: "PM",
        date: "27/06/2020",
        gender: "masculino",
      },
    ],
  };
  expect(reducer(before, action)).toEqual(after);
});
