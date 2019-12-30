import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/layouts/Navbar';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Register from './components/pages/Register';

import GuestState from './components/context/guestContext/guestState';
import AuthState from './components/context/authContext/authState';

function App() {
  return (
    <AuthState>
      <GuestState>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
          </Switch>
        </Router>
      </GuestState>
    </AuthState>
  );
}

export default App;
