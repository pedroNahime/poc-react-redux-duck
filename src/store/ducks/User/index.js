import { createActions, createReducer } from "reduxsauce";

// Actions Types, and Creators
export const {Types, Creators} = createActions({
   getUser: [],
   successUser:["data"],
   errorUser:[]
});

export const UserTypes = Types;
export default Creators
export const INITIAL_STATE = {
    user:[],
    error: false
};

export const get = (state = INITIAL_STATE) => ({
    ...state
});

export const success = (state = INITIAL_STATE, action) => ({
    ...state,
    user: action.data, error: false
});

export const error = (state = INITIAL_STATE) => ({
    ...state,
    error: true
});

export const reducers = createReducer(INITIAL_STATE, {
   [Types.GET_USER]: get,
   [Types.SUCCESS_USER]: success,
   [Types.ERROR_USER]: error,
});