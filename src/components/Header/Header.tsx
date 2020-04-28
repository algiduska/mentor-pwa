import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/icons/girl.png';

import './Header.scss';

const Header = () => (
  <header className="header">
    <Link to="/">
      <img src={logo} className="header--logo" alt="logo" />
    </Link>
    <Link className="header--link" to="/">
      Home
    </Link>
    <Link className="header--link" to="/about">
      About
    </Link>
  </header>
);

export default Header;
