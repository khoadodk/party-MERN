import React, { useReducer } from 'react';
import uuid from 'uuid/v1';

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
  CLEAR_EDIT
} from '../types';

const GuestState = props => {
  const initialState = {
    filterGuest: false,
    search: null,
    editable: null,
    guests: [
      {
        id: 1,
        name: 'Khoa Do',
        phone: '123434555',
        dietary: 'Vegan',
        isConfirmed: false
      },
      {
        id: 2,
        name: 'Kay',
        phone: '1234345545r5',
        dietary: 'Non-Veg',
        isConfirmed: true
      },
      {
        id: 3,
        name: 'John',
        phone: '1235545r5',
        dietary: 'Keto',
        isConfirmed: true
      }
    ]
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

  const addGuest = guest => {
    guest.id = uuid();
    guest.isConfirmed = false;
    dispatch({ type: ADD_GUEST, payload: guest });
  };
  const removeGuest = id => {
    dispatch({ type: REMOVE_GUEST, payload: id });
  };
  //This function used for both confirmed and editGuest
  const confirmGuest = guest => {
    dispatch({ type: CONFIRM_GUEST, payload: guest });
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
        clearEdit
      }}
    >
      {props.children}
    </GuestContext.Provider>
  );
};

export default GuestState;
