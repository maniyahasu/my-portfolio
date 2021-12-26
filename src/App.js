import React, { useState, useEffect } from 'react'
import BackToTopIcon from './components/BackToTop';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Heading from './components/PortfolioHeading';
import ToggleButton from './components/Toggle';

function App() {
  const [windowScrollAmount, setWindowScrollAmount] = useState(null);
  const [showSideMenu, setShowSideMenu] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setWindowScrollAmount(window.scrollY);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const backToTopButton = windowScrollAmount >= 500;

  return (
    <div>
      <ToggleButton onClick={() => setShowSideMenu(!showSideMenu)}/>
      <Header style={{left: showSideMenu ? '0px' : null}}/>
      <Heading />
      <Main />
      <Footer />
      <BackToTopIcon iconClass={backToTopButton}/>
    </div>
  );
}

export default App;
