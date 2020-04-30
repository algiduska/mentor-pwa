import React from 'react';

import andSheCanLogo from '../../assets/icons/logo_white.png';

import styles from './Footer.module.scss';

const Footer = () => (
  <footer className={styles.footer}>
    <p className={styles.textLeft}>Created by Naty Leitner</p>
    <img className={styles.logoRight} src={andSheCanLogo} alt="AND SHE CAN" />
  </footer>
);

export default Footer;
