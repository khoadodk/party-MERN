import React, { useState, useContext, useEffect } from 'react';
import AuthContext from '../context/authContext/authContext';
import { Link } from 'react-router-dom';

const Register = ({ history }) => {
  const { registerUser, userAuth, errors, setError, clearError } = useContext(
    AuthContext
  );

  useEffect(() => {
    if (userAuth) history.push('/');
  }, [userAuth, history]);

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, email, password, password2 } = user;

  const hanldleChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
    clearError();
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (password !== password2) setError({ msg: 'Password do not match' });
    registerUser({ name, email, password });
    clearError();
  };

  return (
    <div className="register">
      <h1>Sign Up</h1>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={hanldleChange}
        />
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
        <input
          type="password"
          name="password2"
          placeholder="Confirm Password"
          value={password2}
          onChange={hanldleChange}
        />
        <input type="submit" value="Sign up" className="btn" />
      </form>
      <div className="question">
        {errors !== null && (
          <button className="danger">
            {errors.msg ? errors.msg : errors.error[0].msg}
            <span onClick={() => clearError()}>X</span>
          </button>
        )}
        <p>
          Already have an account? &nbsp; <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
