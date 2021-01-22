import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/navbar.scss";


const Navbar = () => {
    return (
      <div className="navbar">
        <Link to={'/'}><div className="isabelle">ISABELLE SHAFRAN</div></Link>

        <div className="links">
          <a target="_blank" rel="noreferrer" href="http://www.github.com/isabelleshafran">GITHUB</a>
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/isabelleshafran/">LINKEDIN</a>
          <a target="_blank" rel="noreferrer" href="https://angel.co/u/isabelle-shafran">ANGELLIST</a>
          <Link to={'/projects'}>PROJECTS</Link>
          <a target="_blank" rel="noreferrer" href="mailto:isabelle.shafran@gmail.com">EMAIL</a>
        </div> 
      </div>
    );
}

export default Navbar