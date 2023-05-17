import React from 'react';
import NavBar from './components/header/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from './components/shared/Footer';

const App = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;