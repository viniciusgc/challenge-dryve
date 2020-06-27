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

test("should be return  emittings data", () => {
  const before = initialState;

  const action = {
    type: types.FETCH_EMITTING,
    payload: [{ value: "PM", label: "Polícia Militar" }],
  };

  const after = {
    emittings: [{ value: "PM", label: "Polícia Militar" }],
    personalData: {},
  };
  expect(reducer(before, action)).toEqual(after);
});

test("should be loading personalData props", () => {
  const before = initialState;

  const action = { type: types.FETCH_PERSONAL_DATA_BY_ID, payload: {} };

  const after = {
    emittings: [],
    personalData: {},
  };
  expect(reducer(before, action)).toEqual(after);
});

test("should be return  personalData object", () => {
  const before = initialState;

  const action = {
    type: types.FETCH_PERSONAL_DATA_BY_ID,
    payload: {
      name: "Name test",
      rg: "99.999.999-9",
      emmiting: "PM",
      date: "27/06/2020",
      gender: "masculino",
    },
  };

  const after = {
    emittings: [],
    personalData: {
      name: "Name test",
      rg: "99.999.999-9",
      emmiting: "PM",
      date: "27/06/2020",
      gender: "masculino",
    },
  };
  expect(reducer(before, action)).toEqual(after);
});
