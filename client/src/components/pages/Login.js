import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../context/authContext/authContext';

const Login = ({ history }) => {
  const { loginUser, errors, userAuth, clearError } = useContext(AuthContext);

  useEffect(() => {
    if (userAuth) history.push('/');
  }, [userAuth]);

  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  const { password, email } = user;

  const hanldleChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    loginUser({ email, password });
  };
  return (
    <div className="register">
      <h1>Log In</h1>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={hanldleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={hanldleChange}
        />

        <input type="submit" value="Sign In" className="btn" />
      </form>
      <div className="question">
        {errors !== null && (
          <button className="danger">
            {errors.msg ? errors.msg : errors.error[0].msg}
            <span onClick={() => clearError()}>X</span>
          </button>
        )}
        <p>
          Need an account? &nbsp; <Link to="/register">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
