import React from 'react'

import AboutMe from './AboutMe'
import Portfolio from './Portfolio'
import ContactMe from './ContactMe'
import Resume from './Resume'

export default function Body({currentPage}) {
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
  }

  return (
    //TODO: Conditional for AboutMe, Portfolio, ContactMe, and Resume
    <>
      {renderPage()}
    </>
  )
}
