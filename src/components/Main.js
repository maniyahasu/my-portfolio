import React from 'react'
import About from './pages/About';
import Contact from './pages/Contact';
import PortFolioSection from './pages/PortfolioSection';
import Resume from './pages/Resume';
import Skills from './pages/Skills';

const Main = () => {
    return (
        <main id="main">
            <About />
            <Skills />
            <Resume />
            <PortFolioSection />
            <Contact />
        </main>
    )
}
export default Main;
