import { useContext, useState } from 'react'

import Nav from './components/Nav'
import ShowCase from './components/ShowCase'
import Aboutme from './components/Aboutme'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Footer from './components/FooterCom'
import { ThemeContext } from './context/ThemeProvider'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Projects_ from './components/Projects_'
import Contact from './components/Contact'
import FooterCom from './components/FooterCom'

function App() {
 const theme  = useContext(ThemeContext)
 console.log(theme)

  return (
    <>
    {/* <Routes>
      <Route path='/projects' Component = {<Projects/>}/>
    </Routes> */}
    <Nav/>
    {/* <Home/> */}
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/projects' element={<Projects_/>}/>
      <Route path='/about-me' element={<Aboutme/>}/>
      <Route path='/contact-us' element={<Contact/>}/>
      {/* <Route path='/contact-us' element={</>}/> */}
      {/* <Route path='/projects' element={<Projects_/>}/> */}
    </Routes>
    <FooterCom/>
    {/* <Nav/>
    <ShowCase/>
    <Aboutme/>
    <Skills/>
    <Experience/>
    <Projects/>
    <Footer/> */}
    </>
  )
}

export default App
