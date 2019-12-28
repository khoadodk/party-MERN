import React, { useState, useContext, useEffect } from 'react';
import GuestContext from '../context/guestContext/guestContext';

const GuestForm = () => {
  const [guest, setGuest] = useState({
    name: '',
    phone: '',
    dietary: 'Non-Veg'
  });
  const { addGuest, editable, clearEdit, confirmGuest } = useContext(
    GuestContext
  );
  const { name, phone, dietary } = guest;

  useEffect(() => {
    if (editable !== null) {
      setGuest(editable);
    } else {
      setGuest({
        name: '',
        phone: '',
        dietary: 'Non-Veg'
      });
    }
  }, [editable]);

  const handleChange = e => {
    setGuest({
      ...guest,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (editable !== null) {
      confirmGuest(guest);
      clearEdit();
    } else {
      addGuest(guest);
      setGuest({
        name: '',
        phone: '',
        dietary: 'Non-Veg'
      });
    }
  };

  return (
    <div className="invite-section">
      <h1>Invite Someone</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Phone"
          name="phone"
          value={phone}
          onChange={handleChange}
        />
        <p className="options-label">Dietary</p>
        <div className="options">
          <label className="container">
            Non-Veg
            <input
              type="radio"
              name="dietary"
              value="Non-Veg"
              checked={dietary === 'Non-Veg'}
              onChange={handleChange}
            />
            <span className="checkmark"></span>
          </label>
          <label className="container">
            Vegan
            <input
              type="radio"
              name="dietary"
              value="Vegan"
              checked={dietary === 'Vegan'}
              onChange={handleChange}
            />
            <span className="checkmark"></span>
          </label>
          <label className="container">
            Keto
            <input
              type="radio"
              name="dietary"
              value="Keto"
              checked={dietary === 'Keto'}
              onChange={handleChange}
            />
            <span className="checkmark"></span>
          </label>
        </div>
        <input
          type="submit"
          className="btn"
          value={editable !== null ? 'Update Guest' : 'Add Guest'}
        />

        {editable !== null ? (
          <input
            onClick={clearEdit}
            type="button"
            className="btn clear"
            value="X"
          />
        ) : null}
      </form>
    </div>
  );
};

export default GuestForm;
