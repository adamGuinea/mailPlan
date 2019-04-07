import { FETCH_USER, LOADING_DATA, CLEAR_LOADING_DATA } from "../actions/types";

const initialState = {
  isAuthenticated: false,
  user: {},
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOADING_DATA:
      return {
        ...state,
        loading: true
      };
    case CLEAR_LOADING_DATA:
      return {
        ...state,
        loading: false
      };
    case FETCH_USER:
      return action.payload || false;
    default:
      return state;
  }
}
