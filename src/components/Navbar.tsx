// eslint-disable-next-line
import React from "react";

import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("about");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "projects", "contact"];
      const scrollY = window.scrollY + 100;

      for (let id of sections) {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= scrollY && section.offsetTop + section.offsetHeight > scrollY) {
          setActiveLink(id);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = ["about", "projects", "contact"];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 shadow-md">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-extrabold text-accent tracking-wide">Devops</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-[16px] font-medium text-primary">
          {links.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`relative hover:text-accent transition duration-300 ${
                  activeLink === id ? "text-accent font-semibold" : ""
                }`}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-2xl text-primary cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX /> : <FiMenu />}
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <ul className="absolute top-16 left-0 right-0 bg-white px-6 py-4 flex flex-col items-center gap-4 shadow-md z-40 md:hidden">
            {links.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={() => setIsOpen(false)}
                  className={`block text-lg font-medium ${
                    activeLink === id ? "text-accent font-semibold" : "text-primary"
                  }`}
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
