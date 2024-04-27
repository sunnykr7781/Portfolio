import React from "react"
import "./Project.css"
import "./Mediaquery.css"

const Project = () => {
  return (
    <>
      <div id="projects">
        <div className="head">
          <h6>browse my recent</h6>
          <h1>projects</h1>
        </div>
        <div className="cont">
          <div className="box">
            <img src="../assets/be.png" alt="" />
            <h1>mozzila extension</h1>
            <div className="buttonn">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://todo-verse.netlify.app/"
              >
                live
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/sunnykr7781/ToDo-Verse/tree/main/browser-extension"
              >
                github
              </a>
            </div>
          </div>
          <div className="box">
            <img src="../assets/be2.png" alt="" />
            <h1>redux cart</h1>
            <div className="buttonn">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://redux-cartapp.netlify.app/"
              >
                live
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/sunnykr7781/Redux_Cart"
              >
                github
              </a>
            </div>
          </div>
          <div className="box">
            <img src="../assets/be3.png" alt="" />
            <h1>get tala</h1>
            <div className="buttonn">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://sunnykr7781.github.io/GetTala_website/"
              >
                live
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/sunnykr7781/GetTala_website"
              >
                github
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Project
