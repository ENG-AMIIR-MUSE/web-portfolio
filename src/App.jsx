import { useState } from 'react'

import Nav from './components/Nav'
import ShowCase from './components/ShowCase'
import Aboutme from './components/Aboutme'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'

function App() {
 

  return (
    <>
    <Nav/>
    <ShowCase/>
    <Aboutme/>
    <Skills/>
    <Experience/>
    <Projects/>
    </>
  )
}

export default App
