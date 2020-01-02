import React, { useContext, useRef } from 'react';
import GuestContext from '../context/guestContext/guestContext';

const GuestSearch = () => {
  const searchValue = useRef('');
  const { searchGuest, clearSearch } = useContext(GuestContext);

  const handleChange = e => {
    if (searchValue.current.value !== '') {
      searchGuest(e.target.value);
    } else {
      clearSearch();
    }
  };

  return (
    <div>
      <input
        type="text"
        className="search"
        placeholder=" Search Guest by name ..."
        ref={searchValue}
        onChange={handleChange}
      />
      <i className="fas fa-search search-icon" />
    </div>
  );
};

export default GuestSearch;
