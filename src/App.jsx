import React, { useContext } from 'react';
import NavBar from './components/header/NavBar';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import Footer from './components/shared/Footer';
import { AuthContext } from './provider/AuthProvider';
import { ScaleLoader } from 'react-spinners';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 100, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});
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