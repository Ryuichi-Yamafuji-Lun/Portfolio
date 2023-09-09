// Web Page
import { Link } from "react-scroll";
import { useState, useEffect } from "react";
import { TiHome } from "react-icons/ti";
import { FaUserCircle, FaGlasses, FaLaptopCode, FaPaperPlane, FaFileAlt, FaBars, FaTimes, FaGithub, FaLinkedin, } from "react-icons/fa"
import LightLogo from "../assets/icons/Light-Logo.png"

const NavBar = () => {

  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  useEffect(() => {
    // Function to handle window resize
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setNav(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  return (
    <div className="sticky top-0 px-4 h-20 w-screen flex justify-between items-center font-lato bg-background-white text-line-white ">
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
      <div className={`fixed left-0 w-full ${!nav ? "hidden" : ""} flex flex-col items-center text-xl space-y-6`} style={{ top: "50%", transform: "translateY(20%)" }}>
        <ul className="flex flex-col items-center justify-center p-10 bg-background-white border-2 border-line-white">
          <li>
            <Link to="home" className="flex flex-col items-center" onClick={() => setNav(false)}>
              <TiHome /> 
              <p>Home</p>
            </Link>
          </li>
          <li>
            <Link to="about" className="flex flex-col items-center" onClick={() => setNav(false)}>
              <FaUserCircle /> 
              <p>About me</p>
            </Link>
          </li>
          <li>
            <Link to="project" className="flex flex-col items-center" onClick={() => setNav(false)}>
              <FaLaptopCode />
              <p>Projects</p>
            </Link>
          </li>
          <li>
            <Link to="research" className="flex flex-col items-center" onClick={() => setNav(false)}>
              <FaGlasses />
              <p>Research</p>
            </Link>
          </li>
          <li>
            <Link to="contact" className="flex flex-col items-center" onClick={() => setNav(false)}>
              <FaPaperPlane />
              <p>Contact Me</p>
            </Link>
          </li>
          <li className="flex flex-col items-center" onClick={() => setNav(false)}>
            <FaFileAlt />
            <p>Resume</p>
          </li>
          <li className="flex flex-col items-center" onClick={() => setNav(false)}>
            <a href="https://github.com/Ryuichi-Yamafuji-Lun" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="flex flex-col items-center justify-center">
              <FaGithub />
              <p>Github</p>
            </a>
          </li>
          <li className="flex flex-col items-center" onClick={() => setNav(false)}>
            <a href="https://www.linkedin.com/in/ryulun/" target="_blank" rel="noopener noreferrer" aria-label="Linkedin" className="flex flex-col items-center justify-center">
              <FaLinkedin />
              <p>Linkedin</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;