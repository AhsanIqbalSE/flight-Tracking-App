import { SET_FLIGHT_DETAILS } from "./action";

const initialState = {
  flightDetails: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FLIGHT_DETAILS:
      return {
        ...state,
        flightDetails: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
