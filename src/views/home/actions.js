import client from "../../client";
import { API } from "../../constants";
import { ActionTypes as types } from "./constants";

export const fetchCars = () => (dispatch) => {
  client
    .get(`${API.CARS}`)
    .then((response) => {
      dispatch({
        type: types.FETCH_CARS,
        payload: response.data,
      });
    })
    .catch((e) => {
      console.log(e);
    });
};
