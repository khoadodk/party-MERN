import React, { useContext } from 'react';
import GuestContext from '../context/guestContext/guestContext';

const GuestCounter = () => {
  const { guests } = useContext(GuestContext);
  const totalInvited = guests.length;
  const attending = guests.filter(guest => guest.isConfirmed === true);
  const totalAttenting = attending.length;
  const attendingDietary = type =>
    attending.filter(guest => guest.dietary === type).length;
  const invitedDietary = type =>
    guests.filter(guest => guest.dietary === type).length;

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>Guest</th>
            <th>Invited</th>
            <th>Attending</th>
          </tr>
          <tr>
            <th>Non-Veg</th>
            <td>{invitedDietary('Non-Veg')}</td>
            <td>{attendingDietary('Non-Veg')}</td>
          </tr>
          <tr>
            <th>Vegan</th>
            <td>{invitedDietary('Vegan')}</td>
            <td>{attendingDietary('Vegan')}</td>
          </tr>
          <tr>
            <th>Keto</th>
            <td>{invitedDietary('Keto')}</td>
            <td>{attendingDietary('Keto')}</td>
          </tr>
          <tr>
            <th>Total</th>
            <td>{totalInvited}</td>
            <td>{totalAttenting}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default GuestCounter;
