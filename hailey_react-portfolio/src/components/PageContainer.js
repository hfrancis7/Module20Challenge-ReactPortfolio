import React, { useState } from 'react';
import Navbar from './Navbar';
import AboutMe from "./pages/AboutMe"
import ContactMe from './pages/ContactMe';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About Me');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if(currentPage === 'About Me'){
      return <AboutMe />
    }
    if(currentPage === 'Portfolio'){
      return <Portfolio />
    }
    if(currentPage === "Contact Me"){
      return <ContactMe />
    }
    if(currentPage === "Resume"){
      return <Resume />
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
      <header class="header-container">
            <h1 class="hailey-title">Hailey D. Francis</h1>
            <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      </header>
      <body>
        {renderPage()}
      </body>
      <footer>
        
      </footer>
    </>
    
  );
}
