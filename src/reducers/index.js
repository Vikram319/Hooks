import { combineReducers } from "redux";
import { dropdownMenuReducer } from "./dropdownMenuReducer";
import { counterReducer } from "./counterReducer";
export const rootReducer = combineReducers({
  dropdownItems: dropdownMenuReducer,
  counter: counterReducer,
});
