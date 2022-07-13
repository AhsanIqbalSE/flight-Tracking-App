export const SET_SEARCHES = "SET_SEARCHES";

const action = {};

action.setSearches = function (payload) {
  return {
    type: SET_SEARCHES,
    payload,
  };
};

export default action;
