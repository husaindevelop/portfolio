import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from "./Header";
import ahamedPhoto from './photo_ahamed.jpg';
import './HeroSection.css';

const About = () => {
    return (
      <div className="hero-section">
        <div className="hero-photo">
        <img src={ahamedPhoto} title="Photo" />
        </div>
      <div className="hero-content">
        <h1>Ahamed Husain</h1>
        <h3>Senior Full Stack Developer</h3>
        <p>Rolled out 15 + SAAS projects | Created 30 + websites | Built 8 + hybrid android apps<br/>Proficient in PHP, Laravel, Nodejs, Java, Kotlin, React, Javascript, Jquery, Vuejs, HTML5, CSS3, Bootstrap, TailwindCSS, SQL</p>
      </div>
        </div>
         );
};

export default About;