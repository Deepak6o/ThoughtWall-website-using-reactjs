import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { IoLogoGithub } from 'react-icons/io5';

const Footer = () => {
  return (
    <footer className="py-8 mt-8 text-center bg-gray-200">
      <p className="text-gray-600">
        &copy; {new Date().getFullYear()} ThoughtWall. All rights reserved.
      </p>
      <div className="flex justify-center mt-2 ">
        <a href="https://www.linkedin.com/in/deepak-kumar-086817200/" className="mx-2 text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={24} />
        </a>
        <a href="https://github.com/Deepak6o" className="mx-2 text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
          <IoLogoGithub size={24} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
