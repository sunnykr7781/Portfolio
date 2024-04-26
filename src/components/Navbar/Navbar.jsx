import React from "react"
import "./Navbar.css"

const Navbar = () => {
  return (
    <>
      <div className="nav">
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
              target="_blank"  rel="noreferrer" 
             
              href="https://www.linkedin.com/in/sunny-kumar-2265a5195/"
            >
              Linkedin
            </a>
          </div>
          <div className="github common">
            <a
              target="_blank"  rel="noreferrer" 
            
              href="https://github.com/sunnykr7781"
            >
              github
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
