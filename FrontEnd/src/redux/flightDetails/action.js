export const SET_FLIGHT_DETAILS = "SET_FLIGHT_DETAILS";

const action = {};

action.setFlightDetails = function (payload) {
  return {
    type: SET_FLIGHT_DETAILS,
    payload,
  };
};

export default action;
