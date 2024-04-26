import "./Contact.css"
const Contact = () => {
  return (
    <>
      <div id="contact">
        <div className="head">
          <h6>connect with me</h6>
          <h1>contact me</h1>
        </div>
        <div className="d">
          <div className="mail">
            <div className="a">
              <i class="ri-mail-line"></i>
              <a target=" _blank" href="mailto:sunny129271@gmail.com">
                e-mail
              </a>
            </div>
            <div className="b">
              <i class="ri-linkedin-fill"></i>
              <a
                target=" _blank"
                href="https://www.linkedin.com/in/sunnykrdev/"
              >
                linkedin
              </a>
            </div>
          </div>
        </div>
        <div className="tag">
          <a href="#nav">home</a>
          <a href="#about">about</a>
          <a href="#skills">skills</a>
          <a href="#projects">project</a>
          <a href="#contact">contact me</a>
        </div>
        <hr />
      </div>
    </>
  )
}
export default Contact
