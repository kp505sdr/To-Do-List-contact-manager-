import { combineReducers } from "redux";
import contactReducer from "./contactReducer";
const rootReducer = combineReducers({
  contactReducer: contactReducer,
});
export default rootReducer;
