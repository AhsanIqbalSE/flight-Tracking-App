import { SET_SEARCHES } from "./action";

const initialState = {
  searches: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCHES:
      return {
        ...state,
        searches: [...state.searches, action.payload]
      };
    default:
      return state;
  }
};

export default reducer;
