import {
  // FETCHING,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  FETCHING_POST,
} from "../actions";

const initialState = {
  posts: [],
  isFetching: false,
  isFetched: false,
  hasError: false,
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_POST:
      return {
        ...state,
        isFetching: true,
        isFetched: false,
      };
    case FETCH_SUCCESS:
      if (action.isGetAll) {
        return {
          ...state,
          isFetching: false,
          isFetched: true,
          posts: action.payload,
        };
      }
      break;
    case FETCH_FAILURE:
      return {
        ...state,
        isFetching: true,
        isFetched: false,
        hasError: action.payload,
      };
    default:
      return state;
  }
};
