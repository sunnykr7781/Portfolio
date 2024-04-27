import React from "react"
import "./Home.css"
import "./Mediaquery.css"

const Home = () => {
  const downloadCV = () => {
    // Adjust the path to your CV file
    const cvUrl = process.env.PUBLIC_URL + "/assets/cv.pdf"

    // Open the CV file in a new window
    window.open(cvUrl, "_blank")
  }

  return (
    <div id="home">
      <main>
        <div className="image">
          <img src={process.env.PUBLIC_URL + "/assets/pp.jpeg"} alt="imageee" />
        </div>
        <div className="information">
          <h5>hello, I'm</h5>
          <h1>SUNNY KUMAR</h1>
          <h3>software developer</h3>
          <div className="downloads">
            <button className="btn2" onClick={downloadCV}>
              Download CV
            </button>
            <a href="#contact">contact</a>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
