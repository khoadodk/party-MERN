import React, { useReducer } from 'react';
import GuestContext from './guestContext';
import guestReducer from './guestReducer';
import { TOGGLE_FILTER, SEARCH_GUEST, CLEAR_SEARCH } from '../types';

const GuestState = props => {
  const initialState = {
    filterGuest: false,
    search: null,
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
        clearSearch
      }}
    >
      {props.children}
    </GuestContext.Provider>
  );
};

export default GuestState;
