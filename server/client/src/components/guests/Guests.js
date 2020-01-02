import React, { useContext, useEffect } from 'react';
import Guest from './Guest';
import GuestContext from '../context/guestContext/guestContext';

const Guests = () => {
  const { guests, filterGuest, search, getGuests } = useContext(GuestContext);
  useEffect(() => {
    getGuests();
    // eslint-disable-next-line
  }, []);
  return (
    <div className="guests">
      {search !== null
        ? search.map(guest => <Guest key={guest._id} guest={guest} />)
        : guests
            .filter(guest => !filterGuest || guest.isConfirmed)
            .map(guest => <Guest key={guest._id} guest={guest} />)}
    </div>
  );
};
export default Guests;
