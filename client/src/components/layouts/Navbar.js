import React, { useContext, Fragment } from 'react';
import AuthContext from '../context/authContext/authContext';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { logout, clearError, userAuth, user } = useContext(AuthContext);
  const handleLogout = () => {
    logout();
    clearError();
  };

  const userLink = (
    <Fragment>
      <li>Hello, {user && user.name}</li>
      <li>
        <a href="#" onClick={handleLogout}>
          Log Out<i className="fas fa-sign-out-alt"></i>
        </a>
      </li>
    </Fragment>
  );

  const authLink = (
    <Fragment>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Log In</Link>
      </li>
    </Fragment>
  );

  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">
          <h1>
            Party<i className="fas fa-glass-cheers"></i>
          </h1>
        </Link>
      </div>

      <ul>{userAuth ? userLink : authLink}</ul>
    </div>
  );
};

export default Navbar;
