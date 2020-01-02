import React, { useContext } from 'react';
import GuestContext from '../context/guestContext/guestContext';

const Guest = ({ guest }) => {
  const { id, name, dietary, isConfirmed, phone } = guest;
  const { removeGuest, confirmGuest, editGuest } = useContext(GuestContext);

  const handleRemove = () => {
    removeGuest(id);
  };

  const handleConFirm = () => {
    confirmGuest({ ...guest, isConfirmed: !isConfirmed });
  };

  const checkConfirm = isConfirmed ? 'Confirm' : 'Unconfirmed';
  return (
    <div className="guest-card">
      <div className="card-head">
        <div>
          <label className={checkConfirm}>
            {' '}
            {checkConfirm}
            <i className={`fas fa-check-square ${checkConfirm}`}>
              <input type="checkbox" onChange={handleConFirm} />
            </i>
          </label>
        </div>
        <div>
          <button>
            <i
              className="fas fa-user-edit"
              onClick={() => editGuest(guest)}
            ></i>
          </button>
          <button onClick={handleRemove}>
            <i className="fas fa-trash-alt remove"></i>
          </button>
        </div>
      </div>
      <div className="card-body">
        <h2>{name}</h2>
        <span
          className={
            'badge ' +
            (dietary === 'Non-Veg'
              ? 'red'
              : dietary === 'Vegan'
              ? 'green'
              : 'seaGreen')
          }
        >
          {dietary}
        </span>
        <div className="contact">
          <i className="fas fa-phone-alt" />
          <p>{phone}</p>
        </div>
      </div>
    </div>
  );
};

export default Guest;
