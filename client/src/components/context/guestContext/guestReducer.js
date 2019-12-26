import { TOGGLE_FILTER, SEARCH_GUEST, CLEAR_SEARCH } from '../types';

export default (state, { type, payload }) => {
  const regEx = new RegExp(`${payload}`, 'gi');

  switch (type) {
    case TOGGLE_FILTER:
      return { ...state, filterGuest: !state.filterGuest };
    case SEARCH_GUEST:
      return {
        ...state,
        search: state.guests.filter(guest => guest.name.match(regEx))
      };
    case CLEAR_SEARCH:
      return { ...state, search: null };
    default:
      return state;
  }
};
