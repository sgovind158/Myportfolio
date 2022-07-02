




import React from 'react'
import tic from "../Componets/ticTocGame.png"
import image from "../Componets/image.jpg"

const Projects = () => {
  return (
   
   <>
    {/* <!-- My Services Section Start --> */}
    <section className="services" id="services">
      <div className="content">
        <div className="title"><span>My Projects</span></div>
        <div className="boxes">
          <div className="box" id="box">
            <div className="icon">
              {/* <!-- <i className="fas fa-desktop"></i> --> */}
              <img className="imgs" src="https://user-images.githubusercontent.com/101565845/167443012-23c34429-a537-4648-9736-698de63f9b26.PNG" alt="" />
            </div>
            <div className="topic">Myntra  Clone</div>
            <p>
              Myntra is a major Indian fashion e-commerce company headquartered in Bengaluru, Karnataka, India. The company was founded in 2007 to sell personalized gift items.
              A collaborative project built by a team of 5, executed in 6 days.
            </p>
            <div className="media-icons" id="linkss">
                <a href="https://github.com/AkashKeshari111/Myntra-Clone"
                > <i id="i" className="fab fa-github"></i></a>
              <a href="https://silly-custard-061700.netlify.app"
                ><button id="btns">Live <i className="fa-solid fa-arrow-turn-down-left"></i></button></a>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              {/* <!-- <i className="fas fa-desktop"></i> --> */}
              <img className="imgs" src="https://camo.githubusercontent.com/2b0eb13fc62add7ad3ae9b72278be60069a36367bd950e140b67f4340836588c/68747470733a2f2f63646e2d696d616765732d312e6d656469756d2e636f6d2f6d61782f3830302f312a53574d6178516e593066734d6a38676f5933505f59512e706e67" alt="" />
            </div>
            <div className="topic">PharmEasy  Clone</div>
            <p>
             
              PharmEasy offers 1 lakh+ medicines and health products across various categories through its retail partners which are spread across the country. You can simply place an order on our website/app and we will deliver your online medicine order in as low as 4 hours, with a guaranteed delivery to you in 24-48* hrs! 
            </p>
            <div className="media-icons" id="linkss">
              <a href="https://github.com/AkashKeshari111/Pharmeasy-Website"
                > <i id="i" className="fab fa-github"></i></a>
              <a href=" https://cerulean-macaron-cbc50c.netlify.app/" ><button id="btns">Live <i className="fa-solid fa-arrow-turn-down-left"></i></button></a>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <img className="imgs" src= {tic} alt="" />
            </div>
            <div className="topic">Tic-Toc-Game</div>
            <p>
              
              All the edge cases of the game have been covered.
            </p>
            <p>Tools : React | CSS | JavaScript </p>
            <div className="media-icons" id="linkss">
              <a href="https://github.com/sgovind158/TicTacToe "
                > <i id="i" className="fab fa-github"></i></a>
              <a href="https://toetactie.netlify.app/"
                ><button id="btns">Live <i className="fa-solid fa-arrow-turn-down-left"></i></button> </a>
            </div>
          </div>
        </div>
      </div>
    </section>
   
   </>
  )
}

export default Projects
