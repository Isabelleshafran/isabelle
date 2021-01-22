import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/navbar.scss";


const Navbar = () => {
    return (
      <div className="navbar">
        <div className="isabelle">ISABELLE SHAFRAN</div>

        <div className="links">
          <a href="http://www.github.com/isabelleshafran">Github</a>
          <a href="https://www.linkedin.com/in/isabelleshafran/">Linkedin</a>
          <a href="https://angel.co/u/isabelle-shafran">AngelList</a>
          <Link to={'/projects'}>Projects</Link>
        </div>
      </div>
    );
}

export default Navbar