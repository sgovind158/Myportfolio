// <!-- Move to up button -->
    import React from 'react'
    
    const Navbar = () => {
      return (
       <>

   <div className="scroll-button">
      <a href="#home"><i className="fas fa-arrow-up"></i></a>
    </div>
    {/* // <!-- navgaition menu --> */}
    <nav>
      <div className="navbar">
        <div className="logo"><a href="#">Portfolio.</a></div>
        <ul className="menu">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#services">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
          <div className="cancel-btn">
            <i className="fas fa-times"></i>
          </div>
        </ul>
        <div className="media-icons">
          <a href="https://www.linkedin.com/in/govind-sahu-4618881b2/"
            ><i className="fab fa-linkedin"></i
          ></a>
          <a href="https://github.com/sgovind158"
            ><i className="fab fa-github"></i
          ></a>
        </div>
      </div>
      <div className="menu-btn">
        <i className="fas fa-bars"></i>
      </div>
    </nav>
       
       </>
      )
    }
    
    export default Navbar
    
    
  