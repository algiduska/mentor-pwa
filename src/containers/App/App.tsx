import React from 'react';
import logo from '../../assets/icons/travel.png';
import './App.css';
import Routes from '../../routes/Routes';
import { Link } from 'react-router-dom';

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </header>
    <Routes />
  </div>
);

export default App;
