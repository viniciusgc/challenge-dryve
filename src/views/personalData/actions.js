import client from "../../client";
import { API } from "../../constants";
import { ActionTypes as types } from "./constants";
import { toast } from "react-toastify";

export const fetchPersonalData = () => (dispatch) => {
  client
    .get(`${API.PERSONALDATA}`)
    .then((response) => {
      dispatch({
        type: types.FETCH_PERSONAL_DATA,
        payload: response.data,
      });
    })
    .catch((e) => {
      console.log(e);
    });
};

export const deletePersonalData = (id) => (dispatch) => {
  client
    .delete(`${API.PERSONALDATA}/${id}`)
    .then((response) => {
      dispatch(fetchPersonalData());
      toast.success("Dado excluido com sucesso");
    })
    .catch((e) => {
      console.log(e);
    });
};
