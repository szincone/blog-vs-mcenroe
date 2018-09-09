'use strict'

const axios = require('axios')

// axios Methods
export const FETCHING = "FETCHING";
export const FETCHING_POST = "FETCHING_POST";
// axios outcomes
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";

// case actions for updating state
export const ADD_NEW_POST = "ADD_NEW_POST";
export const DEL_POST = "DEL_POST";
export const MODIFY_POST = "MODIFY_POST";

const URL = "localhost:9000"
export const fetchPosts = () => {
    return async dispatch => {
        dispatch({ type: FETCHING_POST })
        try {
            const data = await axios.get(`${URL}/posts`)
            dispatch({ type: FETCH_SUCCESS, isGetAll: true, payload: data })
        } catch (err) {
            dispatch({ type: FETCH_FAILURE })
        }
    }
}

export const fetchPostID = id => {
    return async dispatch => {
        dispatch ({ type: FETCHING_POST })
        try {
            const data = await axios.get(`${URL}/posts/${id}`)
            dispatch( { type: FETCH_SUCCESS, isGetAll: false, payload: data})
        } catch (err) {
            dispatch( { type: FETCH_FAILURE } )
        }
    }
}