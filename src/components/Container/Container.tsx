import React from 'react';

import './Container.scss';

const Container = ({ children }: { children: React.ReactNode }) => (
  <div className="container">{children}</div>
);

export default Container;
