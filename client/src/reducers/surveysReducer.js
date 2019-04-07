import {
  FETCH_SURVEYS,
  LOADING_DATA,
  CLEAR_LOADING_DATA
} from "../actions/types";

export default function(state = [], action) {
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
    case FETCH_SURVEYS:
      return action.payload;
    default:
      return state;
  }
}
