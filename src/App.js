import React from 'react';

import NavBar from './components/Layout/NavBar';
import HomePage from './components/pages/HomePage';
import './App.css';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <HomePage />
    </div>
  );
}

export default App;
