import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-4">
        <div className="flex space-x-6 text-xl">
          <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" className="hover:text-accent">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="hover:text-accent">
            <FaLinkedin />
          </a>
          <a href="https://instagram.com/your-handle" target="_blank" rel="noopener noreferrer" className="hover:text-accent">
            <FaInstagram />
          </a>
        </div>
        <p className="text-sm text-secondary">&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
