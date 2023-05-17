import React from 'react';
import NavBar from './components/header/NavBar';
import { Outlet } from 'react-router-dom';
import Button from './components/hooks/Button';

const App = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
};

export default App;