import React from "react";
import '../stylesheets/projects.scss'
import IntoTheGloss from '../stylesheets/IntoTheGloss.png';
import DAYA from '../stylesheets/DAYA.png';
import Char from '../stylesheets/CharmandersRevenge.png'
// import { Link } from "react-router-dom";


const Projects = () => {
  return (

    <div className="projects">
      
      <div className="intothegloss">
        <a className="headers" target="_blank" rel="noreferrer" href="https://isabelle-glossier.herokuapp.com/#/">IntoTheGloss</a>
            <span>Full stack web-application cloning the e-commerce site Glossier.</span>
            <span>Built with Ruby on Rails backend Framework and React Redux frontend.</span>
            <img alt="intothegloss" className="intothegloss_image" src={IntoTheGloss}/>
      </div>
      
      <div className="daya">
        <a className="headers" target="_blank" rel="noreferrer" href="http://daya-mern.herokuapp.com/#/">DAYA</a>
          <span>A more social take on the tradtional calendar built using the MERN stack.</span>
            <img alt="daya" className="daya_image" src={DAYA}/>
      </div>

      

      <div className="char">
        <a className="headers" target="_blank" rel="noreferrer" href="https://isabelleshafran.github.io/CharmandersRevenge/">Charmander's Revenge</a>
          <span>Endless runner game built using JavaScript and HTML Canvas</span>
          <img alt="char" className="char_image" src={Char}/>
      </div>

    </div>
  );
};

export default Projects;
