import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/navbar.scss";


const Navbar = () => {
    return (
      <div className="navbar">
        <Link to={'/'}><div className="isabelle">ISABELLE SHAFRAN</div></Link>

        <div className="links">
          <a target="_blank" rel="noreferrer" href="http://www.github.com/isabelleshafran">Github</a>
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/isabelleshafran/">Linkedin</a>
          <a target="_blank" rel="noreferrer" href="https://angel.co/u/isabelle-shafran">AngelList</a>
          <Link to={'/projects'}>Projects</Link>
          <div>Add email</div>
        </div>
      </div>
    );
}

export default Navbar