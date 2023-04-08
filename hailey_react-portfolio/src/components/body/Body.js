import React from 'react'

import AboutMe from './AboutMe'
import Portfolio from './Portfolio'
import ContactMe from './ContactMe'
import Resume from './Resume'

export default function Body() {
  return (
    //TODO: Conditional for AboutMe, Portfolio, ContactMe, and Resume
    <>
      <h2>About Me</h2>
      <AboutMe />
      <h2>Portfolio</h2>
      <Portfolio />
      <h2>Contact Me</h2>
      <ContactMe />
      <h2>Resume</h2>
      <Resume />
    </>
  )
}
