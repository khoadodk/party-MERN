import React, { useReducer } from 'react';
import axios from 'axios';

import GuestContext from './guestContext';
import guestReducer from './guestReducer';
import {
  TOGGLE_FILTER,
  SEARCH_GUEST,
  CLEAR_SEARCH,
  ADD_GUEST,
  REMOVE_GUEST,
  CONFIRM_GUEST,
  EDIT_GUEST,
  CLEAR_EDIT,
  GET_GUESTS,
  GUESTS_ERROR
} from '../types';

const GuestState = props => {
  const initialState = {
    filterGuest: false,
    search: null,
    editable: null,
    guests: [],
    errors: null
  };

  const getGuests = async () => {
    try {
      const res = await axios.get('/guests');
      dispatch({
        type: GET_GUESTS,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: GUESTS_ERROR,
        payload: err
      });
    }
  };

  const [state, dispatch] = useReducer(guestReducer, initialState);

  const toggleFilter = () => {
    dispatch({ type: TOGGLE_FILTER });
  };

  const searchGuest = guest => {
    dispatch({ type: SEARCH_GUEST, payload: guest });
  };

  const clearSearch = () => {
    dispatch({ type: CLEAR_SEARCH });
  };

  const addGuest = async guest => {
    const config = {
      'Content-Type': 'application/json'
    };
    try {
      const res = await axios.post('/guests', guest, config);
      dispatch({ type: ADD_GUEST, payload: res.data });
    } catch (err) {
      dispatch({
        type: GUESTS_ERROR,
        payload: err
      });
    }
  };
  const removeGuest = async id => {
    try {
      await axios.delete(`/guests/${id}`);
      dispatch({ type: REMOVE_GUEST, payload: id });
    } catch (err) {
      dispatch({
        type: GUESTS_ERROR,
        payload: err.response.msg
      });
    }
  };
  //This function used for both confirmed and editGuest
  const confirmGuest = async guest => {
    const config = {
      'Content-Type': 'application/json'
    };
    try {
      const res = await axios.put(`/guests/${guest._id}`, guest, config);
      dispatch({ type: CONFIRM_GUEST, payload: res.data });
    } catch (err) {
      dispatch({
        type: GUESTS_ERROR,
        payload: err.response.msg
      });
    }
  };
  const editGuest = guest => {
    dispatch({ type: EDIT_GUEST, payload: guest });
  };
  const clearEdit = () => {
    dispatch({ type: CLEAR_EDIT });
  };

  // Pass the true/fasle condition to the filter toggler, then pass state of filterGuest to the Guests compo
  console.log(state);
  // Set up the search function in reducer then pass the state of search the the Guests comp
  return (
    <GuestContext.Provider
      value={{
        guests: state.guests,
        toggleFilter,
        filterGuest: state.filterGuest,
        search: state.search,
        searchGuest,
        clearSearch,
        addGuest,
        removeGuest,
        confirmGuest,
        editable: state.editable,
        editGuest,
        clearEdit,
        guests: state.guests,
        getGuests
      }}
    >
      {props.children}
    </GuestContext.Provider>
  );
};

export default GuestState;
