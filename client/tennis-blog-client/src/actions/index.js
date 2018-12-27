require("dotenv").config();
const axios = require("axios");
axios.defaults.withCredentials = true;

// axios Methods
export const FETCHING = "FETCHING";
export const FETCHING_POST = "FETCHING_POST";
// axios outcomes
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";
export const FETCHING_MODIFY = "FETCHING_MODIFY";
export const DEL_POST = "DEL_POST";

// case actions for updating state
export const ADD_NEW_POST = "ADD_NEW_POST";
export const DELETED_POST = "DELETED_POST";
export const MODIFY_POST = "MODIFY_POST";

const URL =
  process.env.BACKEND_URL || "https://tennis-blog-backend.herokuapp.com";

export const fetchPosts = () => {
  return async dispatch => {
    dispatch({ type: FETCHING_POST });
    try {
      const data = await axios.get(`${URL}/posts`);
      dispatch({ type: FETCH_SUCCESS, isGetAll: true, payload: data.data });
    } catch (err) {
      dispatch({ type: FETCH_FAILURE, payload: err });
    }
  };
};

export const fetchPostID = id => {
  return async dispatch => {
    dispatch({ type: FETCHING_POST });
    try {
      const data = await axios.get(`${URL}/posts/${id}`);
      dispatch({ type: FETCH_SUCCESS, isGetAll: true, payload: data.data });
    } catch (err) {
      dispatch({ type: FETCH_FAILURE, payload: err });
    }
  };
};

export const deletePost = id => {
  return async dispatch => {
    dispatch({ type: DEL_POST });
    try {
      await axios.delete(`${URL}/posts/${id}`);
      dispatch({ type: DELETED_POST, payload: id });
    } catch (err) {
      dispatch({ type: FETCH_FAILURE, payload: err });
    }
  };
};

export const addNewPost = post => {
  return async dispatch => {
    dispatch({ type: FETCHING_POST });
    try {
      const data = await axios.post(`${URL}/posts`, post);
      dispatch({ type: ADD_NEW_POST, payload: data.data });
    } catch (err) {
      dispatch({ type: FETCH_FAILURE, payload: err });
    }
  };
};

export const modifyPost = editedPost => {
  return async dispatch => {
    dispatch({ type: FETCHING_MODIFY });
    try {
      const data = await axios.put(`${URL}/posts/${editedPost.id}`, editedPost);
      dispatch({ type: MODIFY_POST, payload: data.data });
    } catch (err) {
      dispatch({ type: FETCH_FAILURE, payload: err });
    }
  };
};
