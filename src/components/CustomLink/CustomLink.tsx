import React from 'react';
import { Link } from 'react-router-dom';

import './CustomLink.scss';

interface linkProps {
  children: string;
  to: string;
}
const CustomLink = ({ to, children }: linkProps) => {
  return (
    <Link to={to} className="link">
      {children}
    </Link>
  );
};

export default CustomLink;
