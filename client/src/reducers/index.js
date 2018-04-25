import { combineReducers } from "redux";
import tweets from "./tweets";

console.log("Opened reducers")

const rootReducer = combineReducers({ tweets });

export default rootReducer;