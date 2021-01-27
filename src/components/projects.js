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

            <a target="_blank" rel="noreferrer" href="https://isabelle-glossier.herokuapp.com/#/">
              <img alt="intothegloss" className="intothegloss_image" src={IntoTheGloss}/>
            </a>

      </div>
      
      <div className="daya">
        <a className="headers" target="_blank" rel="noreferrer" href="http://daya-mern.herokuapp.com/#/">DAYA</a>
          <span>A more social take on the traditional calendar built using the MERN stack.</span>

          <a target="_blank" rel="noreferrer" href="http://daya-mern.herokuapp.com/#/">
            <img alt="daya" className="daya_image" src={DAYA}/>
          </a>

      </div>

      

      <div className="char">
        <a className="headers" target="_blank" rel="noreferrer" href="https://isabelleshafran.github.io/CharmandersRevenge/">Charmander's Revenge</a>
          <span>Endless runner game built using JavaScript and HTML Canvas</span>

          <a target="_blank" rel="noreferrer" href="https://isabelleshafran.github.io/CharmandersRevenge/">
            <img alt="char" className="char_image" src={Char}/>
          </a>
      </div>

    </div>
  );
};

export default Projects;
