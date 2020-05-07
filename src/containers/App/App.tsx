import React, { useState } from 'react';
import styles from './App.module.scss';
import Routes from '../../routes/Routes';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { AuthContext } from '../../context/auth';

// TODO: get authorised info
const App = () => {
  const existingTokens = JSON.parse(localStorage.getItem('tokens'));
  const [authTokens, setAuthTokens] = useState(existingTokens);

  const setTokens = (data: any) => {
    localStorage.setItem('tokens', JSON.stringify(data));
    setAuthTokens(data);
  };

  return (
    <div className={styles.app}>
      {/* pass authorised: boolean */}
      <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
        <Header />
        <main className={styles.content}>
          {/* pass authorise: boolean */}
          <Routes />
        </main>
        <Footer />
      </AuthContext.Provider>
    </div>
  );
};

export default App;
