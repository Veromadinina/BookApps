import { combineReducers } from "redux";
import login from "./login";
import compteur from "./compteur";

export default combineReducers({login,compteur}) ;

// combineReducers permet de combiner plusieurs Reducers