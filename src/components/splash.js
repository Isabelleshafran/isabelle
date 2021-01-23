import React from "react";
// import { Link } from "react-router-dom";
import '../stylesheets/splash.scss'
// import SplashImage from '../stylesheets/splashimage.jpg'
import ProfilePhoto from '../stylesheets/isabelle_shafran.png'


const Splash = () => {
  return (
    <div className="splash">
      {/* <img alt="splashimage" className="splash_image" src={SplashImage} /> */}

      <span className="aboutme">ABOUT ME</span>

      <span className="splash-text">
        In the midst of launching global ad campaigns for Land Rover, the world
        stopped, and so did my work. In this Covid lull, I realized I was dissatisfied
        with my job and it was time to finally pursue something I always thought
        I would love: software engineering. Over the course of 4 months I went
        from launching ad campaigns on websites to building websites myself and
        I haven’t looked back since.
        <br />
        <br />
        I gained extensive knowledge of languages and frameworks such as 
        React, Redux, Javascript, Ruby on Rails, SQL, HTML, and CSS.
        I integrated those skills into two comprehensive single-page 
        applications: IntoTheGloss and DAYA, and one game utilizing HTML Canvas and 
        Vanilla JS Charmander’s Revenge.
      </span>

      <img alt="portfolio" className="profile_photo" src={ProfilePhoto} />
    </div>
  );
};

export default Splash;
