import { useState } from "react";
import { Link } from "react-scroll";
import { TiHome } from "react-icons/ti";
import { FaUserCircle, FaGlasses, FaLaptopCode, FaPaperPlane, FaFileAlt, FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";


const MobileMenuItems = [
  { label: "Home", icon: <TiHome />, to: "home" },
  { label: "About Me", icon: <FaUserCircle />, to: "about" },
  { label: "Experience", icon: <FaGlasses />, to: "experience" },
  { label: "Projects", icon: <FaLaptopCode />, to: "project" },
  { label: "Resume", icon: <FaFileAlt />, to: "resume" },
];

const ExternalLinks = [
  { label: "Github", icon: <FaGithub />, href: "https://github.com/Ryuichi-Yamafuji-Lun" },
  { label: "Linkedin", icon: <FaLinkedin />, href: "https://www.linkedin.com/in/ryulun/" },
];

const NavBar = ({ onContactClick }) => {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);

  return (
    <div className="sticky top-0 px-4 h-20 w-screen flex justify-between items-center font-lato bg-background-main text-line-white ">

      {/* Mobile Menu */}
      <div onClick={handleClick} className={`md:hidden ml-auto pr-2 ${nav ? "hidden" : ""}`}>
        {!nav ? <FaBars className="text-3xl" /> : <FaTimes className="text-3xl" />}
      </div>

      {/* Mobile Menu Items */}
      {nav && (
        <div className={`fixed left-0 w-full flex flex-col items-center text-xl space-y-6`} style={{ top: "50%", transform: "translateY(20%)" }}>
          <ul className="flex flex-col items-center justify-center p-10 bg-background-main border-2 border-line-white rounded-lg">
            {MobileMenuItems.map((item, index) => (
              <li key={index}>
                <Link to={item.to} className="flex flex-col items-center" onClick={() => setNav(false)}>
                  {item.icon}
                  <p>{item.label}</p>
                </Link>
              </li>
            ))}
            <li className="flex flex-col items-center" onClick={() => { onContactClick(); setNav(false); }}>
              <FaPaperPlane />
              <p>Contact Me</p>
            </li>
            {ExternalLinks.map((item, index) => (
              <li key={index}>
                <a href={item.href} target="_blank" rel="noopener noreferrer" aria-label={item.label} className="flex flex-col items-center justify-center" onClick={() => setNav(false)}>
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
