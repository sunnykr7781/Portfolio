import React from "react"
import "./About.css"
import "remixicon/fonts/remixicon.css"
import "./Mediaquery.css"

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
              My name is Sunny Kumar, and I specialize in MERN Stack
              development. I have a solid grasp of full-stack web development
              and am proficient in Java for Data Structures and Algorithms.
              Additionally, I have expertise in Object-Oriented Programming
              (OOPs) concepts and Computer Networks. Currently, I am enrolled in
              a BTech program and anticipate graduating in 2025. I am dedicated
              to learning and strive to deliver high-quality software solutions.
            </div>
          </div>
        </div>
        <div className="na">
          <p>My name is Sunny Kumar, and I specialize in MERN Stack
              development. I have a solid grasp of full-stack web development
              and am proficient in Java for Data Structures and Algorithms.
              Additionally, I have expertise in Object-Oriented Programming
              (OOPs) concepts and Computer Networks. Currently, I am enrolled in
              a BTech program and anticipate graduating in 2025. I am dedicated
              to learning and strive to deliver high-quality software solutions.</p>
        </div>
      </div>
    </>
  )
}

export default About
