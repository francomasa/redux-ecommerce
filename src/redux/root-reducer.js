import { combineReducers } from "redux";

import userReducer from "./user/reducer";
import cartReducer from "./Cart/slice";

const rootReducer = combineReducers({ userReducer, cartReducer });

export default rootReducer;
