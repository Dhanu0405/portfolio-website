import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-8 bg-[#0a192f] text-gray-300 shadow-lg z-50">
      {/* Social icons */}
      <div className="hidden md:flex space-x-4">
        {[
          {
            href: "https://linkedin.com/in/dhanush-rajesh",
            icon: <FaLinkedin size={20} />,
          },
          {
            href: "https://github.com/Dhanu0405",
            icon: <FaGithub size={20} />,
          },
          {
            href: "https://drive.google.com/file/d/1q77UG8V2HEPPXfkD8XgiFWE9lsaWX-X7/view?usp=sharing",
            icon: <BsFillPersonLinesFill size={20} />,
          },
        ].map((social, index) => (
          <a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-[#1c2a3e] rounded hover:text-pink-600 transition duration-300"
          >
            {social.icon}
          </a>
        ))}
      </div>

      {/* menu */}
      <ul className="hidden md:flex space-x-6 ml-auto">
        {["home", "about", "skills", "work", "contact"].map((section) => (
          <li
            key={section}
            className="hover:text-pink-600 transition duration-300"
          >
            <Link to={section} smooth={true} duration={500}>
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          </li>
        ))}
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10 cursor-pointer">
        {!nav ? <FaBars size={24} /> : <FaTimes size={24} />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center space-y-6"
        }
      >
        <div className="flex flex-col items-center space-y-6">
          {[
            {
              href: "https://linkedin.com/in/dhanush-rajesh",
              icon: <FaLinkedin size={30} />,
            },
            {
              href: "https://github.com/Dhanu0405",
              icon: <FaGithub size={30} />,
            },
            {
              href: "https://drive.google.com/file/d/1q77UG8V2HEPPXfkD8XgiFWE9lsaWX-X7/view?usp=sharing",
              icon: <BsFillPersonLinesFill size={30} />,
            },
          ].map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-[#1c2a3e] rounded hover:text-pink-600 transition duration-300"
            >
              {social.icon}
            </a>
          ))}
        </div>
        {["home", "about", "skills", "work", "contact"].map((section) => (
          <li
            key={section}
            className="text-4xl hover:text-pink-600 transition duration-300"
          >
            <Link
              onClick={handleClick}
              to={section}
              smooth={true}
              duration={500}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
