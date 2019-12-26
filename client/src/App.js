import React from 'react';

import Navbar from './components/layouts/Navbar';
import Home from './components/pages/Home';

import GuestState from './components/context/guestContext/guestState';

function App() {
  return (
    <GuestState>
      <div>
        <Navbar />
        <Home />
      </div>
    </GuestState>
  );
}

export default App;
