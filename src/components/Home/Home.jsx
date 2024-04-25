import React from "react"
import "./Home.css"

const Home = () => {
  return (
    <>
      <main>
        <div className="image">
          <img src="../assets/pp.jpeg" alt="image" />
        </div>
        <div className="information">
          <h5>hello, I'm</h5>

          <h1>SUNNY KUMAR</h1>
          <h3>software developer</h3>
          <div className="downloads">
            <button className="btn2">download cV</button>
            <button className="btn">contact info</button>
          </div>
        </div>
      </main>
    </>
  )
}

export default Home
