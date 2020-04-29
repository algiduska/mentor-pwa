import React from 'react';

import styles from './Container.scss';

const Container = ({ children }: { children: React.ReactNode }) => (
  <div className={styles.container}>{children}</div>
);

export default Container;
