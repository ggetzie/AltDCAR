import { combineReducers } from "redux";

import navReducer from "./navReducer";
import entryReducer from "./entryReducer";

export default combineReducers({
    nav: navReducer,
    entries: entryReducer,
})