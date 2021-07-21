import React from 'react';
import './App.css';

import Login from './components/authentification/Login';
import Signup from './components/authentification/Signup';
import FullWebsite from './components/user__interface/FullWebsite';

function App() {
  return (
    <div className="app">
      <FullWebsite />
    </div>
  );
}

export default App;
