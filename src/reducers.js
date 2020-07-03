import { combineReducers } from "redux";
import home from "./views/home/reducers";
import customer from "./views/customer/reducers";

export default combineReducers({ home, customer });
