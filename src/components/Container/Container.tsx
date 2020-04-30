import React from 'react';

import styles from './Container.module.scss';

const Container = ({ children }: { children: React.ReactNode }) => (
  <div className={styles.container}>{children}</div>
);

export default Container;
