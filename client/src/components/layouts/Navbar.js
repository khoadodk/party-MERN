import React from 'react';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <h1>
          Party<i className="fas fa-glass-cheers"></i>
        </h1>
      </div>

      <ul>
        <li>Hello, Khoa</li>
        <li>
          <a href="#">
            Log Out<i className="fas fa-sign-out-alt"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
