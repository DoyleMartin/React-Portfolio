import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header>
      <nav>
        <h1>My Portfolio</h1>
        <div>
          <Link to="/AboutMe">About Me</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/resume">Resume</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;