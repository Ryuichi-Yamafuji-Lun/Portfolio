import { useState } from "react";
import { Link } from "react-scroll";
import { TiHome } from "react-icons/ti";
import { FaUserCircle, FaGlasses, FaLaptopCode, FaPaperPlane, FaFileAlt, FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";

const MobileMenuItems = [
  { label: "Home", icon: <TiHome />, to: "home" },
  { label: "About Me", icon: <FaUserCircle />, to: "about" },
  { label: "Experience", icon: <FaGlasses />, to: "experience" },
  { label: "Projects", icon: <FaLaptopCode />, to: "project" },
];

const ExternalLinks = [
  { label: "Resume", icon: <FaFileAlt />, href: "https://docs.google.com/document/d/1LsHdHDT1QlYNuUpqcHDuX9iiHpufoeJY6G4o7vQz6IA/edit?usp=sharing" },
  { label: "Github", icon: <FaGithub />, href: "https://github.com/Ryuichi-Yamafuji-Lun" },
  { label: "Linkedin", icon: <FaLinkedin />, href: "https://www.linkedin.com/in/ryulun/" },
];

const NavBar = ({ onContactClick }) => {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);

  return (
    <div className="sticky top-0 px-4 h-20 w-screen flex justify-between items-center font-lato bg-background-main text-line-white z-50">
      {/* Hamburger Icon */}
      <div onClick={handleClick} className={`md:hidden ml-auto pr-2 ${nav ? "hidden" : ""}`}>
        {!nav ? <FaBars className="text-3xl" /> : <FaTimes className="text-3xl" />}
      </div>

      {/* Mobile Menu Items */}
      {nav && (
        <div
          className="fixed inset-0 z-50 flex justify-center bg-background-main bg-opacity-90"
          style={{ pointerEvents: "auto" }}
        >
          <ul
            className="flex flex-col items-center p-6 bg-background-main rounded-lg w-11/12 max-w-sm space-y-6 border border-line-white"
            style={{
              position: "absolute", 
              top: "50vh",          
              left: "50%",         
              transform: "translate(-50%, -50%)", 
            }}
          >
            {MobileMenuItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.to}
                  className="flex flex-col items-center"
                  onClick={() => setNav(false)}
                >
                  {item.icon}
                  <p>{item.label}</p>
                </Link>
              </li>
            ))}
            {/* <li
              className="flex flex-col items-center"
              onClick={() => {
                onContactClick();
                setNav(false);
              }}
            >
              <FaPaperPlane />
              <p>Contact Me</p>
            </li> */}
            {ExternalLinks.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="flex flex-col items-center"
                  onClick={() => setNav(false)}
                >
                  {item.icon}
                  <p>{item.label}</p>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavBar;
