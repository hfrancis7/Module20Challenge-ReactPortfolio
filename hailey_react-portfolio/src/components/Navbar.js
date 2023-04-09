import React from 'react'

import '../styles/Header.css';

export default function Navbar({currentPage, handlePageChange}) {
  return (
    <div>
      <nav class="navbar-container">
            <ul class="navbar-style">
                <li><a href="#About-Me" 
                onClick={() => handlePageChange('About Me')}
                classname={currentPage === "About Me" ? "nav-link-active" : "nav-link"}
                >About Me</a></li>
                
                <li><a href="#Portfolio"
                onClick={()=> handlePageChange('Portfolio')}
                classname={currentPage === "Portfolio" ? "nav-link-active" : "nav-link"}
                >Portfolio</a></li>

                <li><a href="#Contact-Me"
                onClick={()=> handlePageChange('Contact Me')}
                classname={currentPage === 'Contact Me' ? "nav-link-active" : "nav-link"}
                >Contact Me</a></li>

                <li><a href="#Resume"
                onClick={()=> handlePageChange('Resume')}
                classname={currentPage === 'Resume' ? "nav-link-active" : "nav-link"}
                >Resume</a></li>
            </ul>
        </nav>
    </div>
  )
}
