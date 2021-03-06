import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/icons/girl.png';

import styles from './Header.module.scss';

const Header = () => (
  <header className={styles.header}>
    <Link to="/">
      <img src={logo} className={styles.logo} alt="logo" />
    </Link>
    <Link className={styles.link} to="/dashboard">
      Dashboard
    </Link>
    <Link className={styles.link} to="/about">
      About
    </Link>
    <Link className={styles.link} to="/events">
      Events
    </Link>
  </header>
);

export default Header;
