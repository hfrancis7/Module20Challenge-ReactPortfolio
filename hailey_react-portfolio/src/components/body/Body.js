import React from 'react'

import AboutMe from './AboutMe'
import Portfolio from './Portfolio'
import ContactMe from './ContactMe'
import Resume from './Resume'

export default function Body() {
  return (
    //TODO: Conditional for AboutMe, Portfolio, ContactMe, and Resume
    <>
      <AboutMe />
      <Portfolio />
      <ContactMe />
      <Resume />
    </>
  )
}
