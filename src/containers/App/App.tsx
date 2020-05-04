import React from 'react';
import styles from './App.module.scss';
import Routes from '../../routes/Routes';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

// TODO: get authorised info
const App = () => (
  <div className={styles.app}>
    {/* pass authorised: boolean */}
    <Header />
    <main className={styles.content}>
      {/* pass authorise: boolean */}
      <Routes />
    </main>
    <Footer />
  </div>
);

export default App;
