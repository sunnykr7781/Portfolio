import React from "react"
import "./About.css"
import "remixicon/fonts/remixicon.css"

const About = () => {
  return (
    <>
      <div id="about">
        <div className="navbar">
          <h3>get to know more</h3>
          <h1>About me</h1>
        </div>
        <div className="content">
          <div className="left">
            <img src="../assets/p2.jpeg" alt="img" />
          </div>
          <div className="right">
            <div className="top">
              <div className="tleft">
                <i class="ri-medal-line"></i>
                <h1>experience</h1>
                <h2>fresher</h2>
                <h2>full stack developer </h2>
              </div>
              <div className="tright">
                <i class="ri-school-line"></i>
                <h1>education</h1>
                <h2>10th(79%) & 12th(71%)</h2>
                <h2>B-tech It (8 cgpa)</h2>
              </div>
            </div>
            <div className="btm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Obcaecati minus qui cumque aut, maxime atque, placeat reiciendis
              labore nostrum eveniet, nam voluptatem! Culpa dolores impedit
              blanditiis debitis animi nihil consequuntur nulla! Amet harum
              magnam quo placeat blanditiis, quae porro ea odio distinctio eum!
              Architecto quisquam et fugiat est, excepturi eius.
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
