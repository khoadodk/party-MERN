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

export default (state, { type, payload }) => {
  const regEx = new RegExp(`${payload}`, 'gi');

  switch (type) {
    case GET_GUESTS:
      return {
        ...state,
        guests: payload,
        errors: null
      };
    case GUESTS_ERROR:
      return {
        ...state,
        guests: [],
        errors: payload
      };
    case TOGGLE_FILTER:
      return { ...state, filterGuest: !state.filterGuest };
    case SEARCH_GUEST:
      return {
        ...state,
        search: state.guests.filter(guest => guest.name.match(regEx))
      };
    case CLEAR_SEARCH:
      return { ...state, search: null };
    case ADD_GUEST:
      return {
        ...state,
        guests: [...state.guests, payload]
      };
    case REMOVE_GUEST:
      return {
        ...state,
        guests: state.guests.filter(guest => guest._id !== payload)
      };
    case CONFIRM_GUEST:
      return {
        ...state,
        guests: state.guests.map(guest =>
          guest._id === payload._id ? payload : guest
        )
      };
    case EDIT_GUEST:
      return {
        ...state,
        editable: payload
      };
    case CLEAR_EDIT:
      return {
        ...state,
        editable: null
      };
    default:
      return state;
  }
};
