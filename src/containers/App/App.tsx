import React from 'react';
import styles from './App.module.scss';
import Routes from '../../routes/Routes';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const App = () => (
  <div className={styles.app}>
    <Header />
    <div className={styles.content}>
      <Routes />
    </div>
    <Footer />
  </div>
);

export default App;
