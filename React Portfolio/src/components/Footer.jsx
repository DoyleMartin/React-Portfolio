import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="text-center mt-5 py-3 bg-black text-white">
      <div>
        <a
          href="https://github.com/doylemartin"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-3"
        >
          <FaGithub size={30} />
        </a>
        <a
          href="https://www.linkedin.com/in/doyle-martin-9a0661305"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-3"
        >
          <FaLinkedin size={30} />
        </a>
      </div>
      <p>© 2025 Doyle Martin</p>
    </footer>
  );
};

export default Footer;
