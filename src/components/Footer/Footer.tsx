import React from 'react';

import andSheCanLogo from '../../assets/icons/logo_white.png';

import './Footer.scss';

const Footer = () => (
  <footer className="footer">
    <p className="footer--text">Created by Naty Leitner</p>
    <img className="footer--logo" src={andSheCanLogo} alt="AND SHE CAN" />
  </footer>
);

export default Footer;
