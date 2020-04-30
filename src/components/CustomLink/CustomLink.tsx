import React from 'react';
import { Link } from 'react-router-dom';

import styles from './CustomLink.module.scss';

interface linkProps {
  children: string;
  to: string;
}
const CustomLink = ({ to, children }: linkProps) => {
  return (
    <Link to={to} className={styles.link}>
      {children}
    </Link>
  );
};

export default CustomLink;
