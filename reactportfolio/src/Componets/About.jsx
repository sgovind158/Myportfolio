




import React from 'react'
import image from "../Componets/image.jpg"
const About = () => {
  return (
   <>
   
   <section className="about" id="about">
      <div className="content">
        <div className="title"><span>About Me</span></div>
        <div className="about-details">
          <div className="left">
            <img src={image} alt="" />
          </div>
          <div className="right">
            <div className="topic">Coding Is My Passion</div>
            <p>
              A Passionate aspiring Full Stack Developer skilled in MERN stack, moulded and shaped by Masai school’s intensive and immersive learning. Look forward to joining a company where I will be able to contribute towards individual and company growth.
            </p>
            <div className="button">
              <button>
                <a
                  href="https://drive.google.com/file/d/1IXY6axmxuOUE3BzQQNy0bKiog8-cjsQy/view?usp=sharing"
                >
                  Download CV</a
                >
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
   
   </>
  )
}

export default About
