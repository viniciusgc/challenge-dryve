import client from "../../client";
import { API } from "../../constants";
import { ActionTypes as types } from "./constants";

export const fetchEmitting = () => (dispatch) => {
  client
    .get(`${API.EMITTING}`)
    .then((response) => {
      dispatch({
        type: types.FETCH_EMITTING,
        payload: response.data,
      });
    })
    .catch((e) => {
      console.log(e);
    });
};
