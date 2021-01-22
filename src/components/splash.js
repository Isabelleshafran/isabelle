import React from "react";
// import { Link } from "react-router-dom";
import '../stylesheets/splash.scss'
import SplashImage from '../stylesheets/splashimage.jpg'


const Splash = () => {
  return (
    <div className="splash">
      <img className="splash-image" src={SplashImage}/>

      <span className="splash-text">
        In the midst of launching global ad campaigns for Land Rover the world
        stopped and so did my work. In this lull I realized I was dissatisfied
        with my job and it was time to finally pursue something I always thought
        I would love: software engineering. Over the course of 4 months I went
        from launching ad campaigns on websites to building websites myself and
        I haven’t looked back since.
        <br />
        <br />
        During my time at App Academy I gained extensive knowledge of languages
        and frameworks such as React, Redux, Javascript, Ruby on Rails, SQL,
        HTML, and CSS. I integrated those skills into two comprehensive
        single-page applications: IntoTheGloss and DAYA, and one game utilizing
        HTML Canvas and Vanilla JS Charmander’s Revenge.
      </span>
    </div>
  );
};

export default Splash;
