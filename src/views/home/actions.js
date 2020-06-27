import client from "../../client";
import { API } from "../../constants";
import { ActionTypes as types } from "./constants";
import { toast } from "react-toastify";

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

export const createPersonalData = (data) => (dispatch) => {
  client
    .post(`${API.PERSONALDATA}`, data)
    .then((response) => {
      window.location.href = "/personal-data?created=true";
    })
    .catch((e) => {
      console.log(e);
    });
};

export const fetchPersonalData = (id) => (dispatch) => {
  client
    .get(`${API.PERSONALDATA}/${id}`)
    .then((response) => {
      dispatch({
        type: types.FETCH_PERSONAL_DATA_BY_ID,
        payload: response.data,
      });
    })
    .catch((e) => {
      console.log(e);
    });
};

export const updatePersonalData = (id, data) => (dispatch) => {
  client
    .put(`${API.PERSONALDATA}/${id}`, data)
    .then((response) => {
      window.location.href = "/personal-data?updated=true";
    })
    .catch((e) => {
      console.log(e);
    });
};
