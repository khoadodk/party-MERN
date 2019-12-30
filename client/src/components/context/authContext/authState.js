import React, { useReducer } from 'react';
import axios from 'axios';
import AuthContext from './authContext';
import authReducer from './authReducer';
import {
  SUCCESS_LOGIN,
  SUCCESS_REGISTER,
  FAIL_LOGIN,
  FAIL_REGISTER,
  SET_ERROR,
  CLEAR_ERROR
} from '../types';

const AuthState = props => {
  const inititalState = {
    userAuth: null,
    errors: null
  };
  const [state, dispatch] = useReducer(authReducer, inititalState);

  const registerUser = async userData => {
    const config = { header: { 'Content-Type': 'application/json' } };
    try {
      const res = await axios.post('/register', userData, config);
      dispatch({
        type: SUCCESS_REGISTER,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: FAIL_REGISTER,
        payload: err.response.data
      });
    }
  };

  const loginUser = async userData => {
    const config = { header: { 'Content-Type': 'application/json' } };
    try {
      const res = await axios.post('/login', userData, config);
      dispatch({
        type: SUCCESS_LOGIN,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: FAIL_LOGIN,
        payload: err.response.data
      });
    }
  };

  const setError = err => {
    dispatch({
      type: SET_ERROR,
      payload: err
    });
  };

  const clearError = err => {
    dispatch({
      type: CLEAR_ERROR,
      payload: err
    });
  };

  return (
    <AuthContext.Provider
      value={{
        userAuth: state.userAuth,
        errors: state.errors,
        registerUser,
        loginUser,
        setError,
        clearError
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
