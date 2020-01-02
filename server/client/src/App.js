import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import setToken from './utils/setToken';

import Navbar from './components/layouts/Navbar';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Register from './components/pages/Register';

import GuestState from './components/context/guestContext/guestState';
import AuthState from './components/context/authContext/authState';
import PrivateRoute from './components/pages/PrivateRoute';

if (localStorage.token) setToken(localStorage.token);

function App() {
  return (
    <AuthState>
      <GuestState>
        <Router>
          <Navbar />
          <Switch>
            <PrivateRoute exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
          </Switch>
        </Router>
      </GuestState>
    </AuthState>
  );
}

export default App;
