import React, { useState } from "react"
import "./Navbar.css"
import "./Mediaquery.css"

const Navbar = () => {
  const [layoutVisible, setLayoutVisible] = useState(false)

  const toggleLayout = () => {
    setLayoutVisible(!layoutVisible)
  }

  const closeLayout = () => {
    setLayoutVisible(false)
  }

  return (
    <>
      <div id="nav" className="nav">
        <div className="cl">
          <div className="name">
            <h4>
              <span>{"</"}</span>
              sunny
              <span>{">"}</span>
            </h4>
          </div>
          <div className="details">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Project</a>
            <a href="#contact">Contact Me</a>
          </div>
          <div className="links">
            <div className="linkedin common">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/sunny-kumar-2265a5195/"
              >
                Linkedin
              </a>
            </div>
            <div className="github common">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/sunnykr7781"
              >
                github
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Layout */}
      {layoutVisible && (
        <div id="layout">
          <div className="ilayout">
            <i className="ri-close-line" onClick={closeLayout}></i>
          </div>
          <div className="alayout">
            <a href="#about" onClick={closeLayout}>
              About
            </a>
            <a href="#skills" onClick={closeLayout}>
              Skills
            </a>
            <a href="#projects" onClick={closeLayout}>
              Projects
            </a>
            <a href="#contact" onClick={closeLayout}>
              Contact
            </a>
          </div>
        </div>
      )}

      {/* Hamburger Menu */}
      <div id="hammenu" className="hammenu">
        <div className="name">
          <h4>
            <span>{"</"}</span>
            sunny
            <span>{">"}</span>
          </h4>
        </div>
        <div className="icon">
          <i className="ri-menu-line" onClick={toggleLayout}></i>
        </div>
      </div>
    </>
  )
}

export default Navbar
