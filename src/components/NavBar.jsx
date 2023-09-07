// Web Page
import { Link } from "react-scroll";
import { useState } from "react";
import { TiHome } from "react-icons/ti";
import { FaUserCircle, FaGlasses, FaLaptopCode, FaPaperPlane, FaFileAlt, FaBars, FaTimes, FaGithub, FaLinkedin, } from "react-icons/fa"
import LightLogo from "../assets/icons/Light-Logo.png"

const NavBar = () => {

  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed top-0 px-4 h-20 w-screen flex justify-between items-center font-lato text-t-white ">
      <div>
        <img
          src={LightLogo}
          alt="Logo"
          className="w-25 h-24 "
        />
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6">
        <li>
          <Link to="home" className="flex items-center">
            <TiHome /> 
            <p className="pl-1">Home</p>
          </Link>
        </li>
        <li>
          <Link to="about" className="flex items-center">
            <FaUserCircle />
            <p className="pl-1">About Me</p>
          </Link>
        </li>
        <li>
          <Link to="project" className="flex items-center">
            <FaLaptopCode />
            <p className="pl-1">Projects</p>
          </Link>
        </li>
        <li className="flex items-center">
          <Link to="research" className="flex items-center">
            <FaGlasses />
            <p className="pl-1">Research</p>
          </Link>
        </li>
        <li>
          <Link to="contact" className="flex items-center">
            <FaPaperPlane />
            <p className="pl-1">Contact Me</p>
          </Link>
        </li>
        <li className="flex items-center">
          <FaFileAlt />
          <p className="pl-1">Resume</p>
        </li>
      </ul>

      {/* Hamburger Menu */}
      <div onClick={handleClick} className="md:hidden">
        {!nav ? <FaBars className="text-3xl" /> : <FaTimes className="text-3xl"/>}
      </div>

      {/* Mobile Menu */}
      <ul className={`fixed top-1/2 left-0 w-full transform -translate-y-1/2 ${!nav ? "hidden" : ""} flex flex-col items-center text-xl space-y-6 bg-blue`}>
        <li>
          <Link to="home" className="flex flex-col items-center">
            <TiHome /> 
            <p>Home</p>
          </Link>
        </li>
        <li>
          <Link to="about" className="flex flex-col items-center">
            <FaUserCircle /> 
            <p>About me</p>
          </Link>
        </li>
        <li>
          <Link to="project" className="flex flex-col items-center">
            <FaLaptopCode />
            <p>Projects</p>
          </Link>
        </li>
        <li>
          <Link to="research" className="flex flex-col items-center">
            <FaGlasses />
            <p>Research</p>
          </Link>
        </li>
        <li>
          <Link to="contact" className="flex flex-col items-center">
            <FaPaperPlane />
            <p>Contact Me</p>
          </Link>
        </li>
        <li className="flex flex-col items-center">
          <FaFileAlt />
          <p>Resume</p>
        </li>
        <li className="flex flex-col items-center">
          <a href="https://github.com/Ryuichi-Yamafuji-Lun" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="flex flex-col items-center justify-center">
            <FaGithub />
            <p>Github</p>
          </a>
        </li>
        <li className="flex flex-col items-center">
          <a href="https://www.linkedin.com/in/ryulun/" target="_blank" rel="noopener noreferrer" aria-label="Linkedin" className="flex flex-col items-center justify-center">
            <FaLinkedin />
            <p>Linkedin</p>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;