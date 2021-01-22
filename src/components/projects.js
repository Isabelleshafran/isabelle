import React from "react";
import '../stylesheets/projects.scss'
// import { Link } from "react-router-dom";


const Projects = () => {
  return (

    <div className="projects">
      
      <a className="headers" target="_blank" rel="noreferrer" href="https://isabelle-glossier.herokuapp.com/#/">IntoTheGloss</a>
          <span>Full stack web-application cloning the e-commerce site Glossier.</span>
          <span>Built with Ruby on Rails backend Framework and React Redux frontend.</span>
          <img src="./IntoTheGloss.png" alt="intothegloss"/>
      
      
      <a className="headers" target="_blank" rel="noreferrer" href="http://daya-mern.herokuapp.com/#/">DAYA</a>
        <span>A more social take on the tradtional calendar built using the MERN stack.</span>
          <img src="./DAYA.png" alt="daya"/>


      <a className="headers" target="_blank" rel="noreferrer" href="https://isabelleshafran.github.io/CharmandersRevenge/">Charmander's Revenge</a>
        <span>Endless runner game built using JavaScript and HTML Canvas</span>
        <img src="./CharmandersRevenge.png" alt="char"/>

    </div>
  );
};

export default Projects;
