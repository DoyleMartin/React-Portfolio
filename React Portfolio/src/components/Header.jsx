import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <h1 className="navbar-brand mx-auto" style={{ fontSize: '2.5rem'}}>Doyle's Portfolio</h1>
          <div className="d-flex ms-auto"> 
            <Link to="/AboutMe" className="nav-link px-4">About Me</Link>
            <Link to="/portfolio" className="nav-link px-4">Portfolio</Link>
            <Link to="/contact" className="nav-link px-4">Contact</Link>
            <Link to="/resume" className="nav-link px-4">Resume</Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
