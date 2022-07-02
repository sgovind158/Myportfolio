





import React from 'react'

const Skills = () => {
  return (
    <>
    <section className="skills" id="skills">
      <div className="content">
        <div className="title"><span>My Skills</span></div>
        <div className="skills-details">
          {/* <!-- <div className="text">
            <div className="topic">Skills Reflects Our Knowledge</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
              natus tenetur tempora? Quasi, rem quas omnis. Porro rem aspernatur
              reiciendis ut praesentium minima ad, quos, officia! Illo libero,
              et, distinctio repellat sed nesciunt est modi quaerat placeat.
              Quod molestiae, alias?
            </p>
            <div className="experience">
              <div className="num">10</div>
              <div className="exp">
                Years Of <br />
                Experience
              </div>
            </div>
          </div> --> */}
          <div className="boxes">
            <div className="box">
              <div className="topic">HTML</div>
              {/* <!-- <div className="per">90%</div> --> */}
            </div>
            <div className="box">
              <div className="topic">CSS</div>
              {/* <!-- <div className="per">80%</div> --> */}
            </div>
            <div className="box">
              <div className="topic">JavScript</div>
              {/* <!-- <div className="per">70%</div> --> */}
            </div>
            <div className="box">
              <div className="topic">React</div>
              {/* <!-- <div className="per">65%</div> --> */}
            </div>
            <div className="box">
              <div className="topic">Redux</div>
              {/* <!-- <div className="per">60%</div> --> */}
            </div>
            <div className="box">
              <div className="topic">Chakra-UI</div>
              {/* <!-- <div className="per">80%</div> --> */}
            </div>
            <div className="box">
              <div className="topic">Material-UI</div>
              {/* <!-- <div className="per">60%</div> --> */}
            </div>
          </div>
        </div>
      </div>
    </section>

    
    
    
    </>
  )
}

export default Skills
