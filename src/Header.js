import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{Width:'100%'}}>
      <div className="container-fluid" style={{width:'100%'}}> {/* Added container-fluid class */}
     
    <a className="navbar-brand" href="#">ahamedDevelops</a>
       
       
        <div className="collapse navbar-collapse col-8" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills">Skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#blog">Blog</a>
            </li>
          </ul>
          </div>

          <button className="btn btn-primary ml-auto">Hire Me</button>
        
      </div>
    </nav>
    );
};

export default Header;