import { combineReducers } from "redux";
import home from "./views/home/reducers";
import customer from "./views/customers/reducers";

export default combineReducers({ home, customer });
