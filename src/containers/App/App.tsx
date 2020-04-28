import React from 'react';
import './App.scss';
import Routes from '../../routes/Routes';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const App = () => (
  <div className="App">
    <Header />
    <Routes />
    <Footer />
  </div>
);

export default App;
