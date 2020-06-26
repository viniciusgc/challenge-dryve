import { combineReducers } from "redux";
import home from "./views/home/reducers";
import personalData from "./views/personalData/reducers";

export default combineReducers({ home, personalData });
