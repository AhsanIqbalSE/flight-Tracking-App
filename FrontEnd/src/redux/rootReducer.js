import { combineReducers } from "redux";

import searches from "./searches/reducer";
import flightDetails from "./flightDetails/reducer";

const reducers = combineReducers({
  searches,
  flightDetails
});

export default reducers;
