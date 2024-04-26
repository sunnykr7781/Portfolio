import React from "react"
import Navbar from "./components/Navbar/Navbar"
import Home from "./components/Home/Home"
import About from "./components/About/About"
import Skills from "./components/Skills/Skills"
import Project from "./components/Project/Project"
import Contact from "./components/Contact/Contact"

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Project />
      <Contact />
    </>
  )
}

export default App
