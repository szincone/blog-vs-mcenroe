import {
  // FETCHING,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  FETCHING_POST,
  ADD_NEW_POST,
  MODIFY_POST,
  DEL_POST,
  DELETED_POST,
} from "../actions";

const initialState = {
  posts: [],
  isFetching: false,
  isFetched: false,
  hasError: false,
  isDeleting: false,
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
    case DEL_POST:
      return {
        ...state,
        isDeleting: true,
      };
    case DELETED_POST:
      return {
        ...state,
        isDeleting: false,
        posts: state.posts.filter(post => post.id !== action.payload),
      };
    case ADD_NEW_POST:
      return {
        ...state,
        isFetching: false,
        isFetched: true,
      };
    case MODIFY_POST:
      return {
        ...state,
        isFetching: false,
        isFetched: true,
      };
    default:
      return state;
  }
};
