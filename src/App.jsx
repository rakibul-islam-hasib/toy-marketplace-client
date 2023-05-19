import React, { useContext } from 'react';
import NavBar from './components/header/NavBar';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import Footer from './components/shared/Footer';
import { AuthContext } from './provider/AuthProvider';
import { ScaleLoader } from 'react-spinners';

const App = () => {
  const { user, loader } = useContext(AuthContext);
  return (
    loader ? <div className="h-screen flex justify-center items-center">
      <ScaleLoader
        color="#FE6DB4"
        height={50}
      />
    </div> : <div>
      <NavBar />
      <Outlet />
      <Footer />
      <Toaster />
    </div>
  );
};

export default App;