import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin, FaFileAlt, FaPaperPlane} from "react-icons/fa";

const MenuItems = [
  { label: "ABOUT ME", to: "about" },
  { label: "EXPERIENCE", to: "experience" },
  { label: "PROJECTS", to: "project" },
];

const Home = ({ openContactForm }) => {
  const [activeSection, setActiveSection] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1150); 
  
  const handleSetActive = (to) => {
    const activeIndex = MenuItems.findIndex((item) => item.to === to);
    setActiveSection(activeIndex);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1150); 
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div name="home" className="w-full h-screen font-lato">
      <div className="max-w-[1000px] mx-auto p-8 flex flex-col h-full justify-center">
        <p className="text-4xl text-line-white font-bold sm:text-5xl sm:text-left">
          Ryuichi Y. Lun,
        </p>
        <p className="text-3xl text-line-white sm:text-4xl font-bold sm:text-left">
          software engineer.
        </p>
        {/* Incorporate the Patalex alongside the menu items here */}
        {/* Menu Items */}
        {!isMobile && (
          <ul className="flex flex-col pt-4">
            {MenuItems.map((item, index) => (
              <li key={index} className="pb-2 text-line-white">
                <Link
                  to={item.to}
                  spy={true}
                  smooth={true}
                  duration={500}
                  onSetActive={handleSetActive}
                  offset={-100} 
                >
                  <div className={`flex items-center ${activeSection === index ? "font-bold" : ""}`}>
                    <span
                      className="nav-indicator mr-4 h-px w-8 bg-line-white transition-all group-hover:w-16 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"
                      style={{ width: activeSection === index ? "75px" : "30px" }}
                    ></span>
                    <p
                      className="transition-transform transform hover:scale-110 hover:translate-x-1 cursor-pointer"
                      style={{ minWidth: "150px" }}
                    >
                      {item.label}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}

        {/* Footer Section */}
        
        <footer className="mt-10">
          <ul className="flex space-x-4 text-line-white">
            <li className="hover:scale-110 cursor-pointer">
              <a
                href="https://github.com/Ryuichi-Yamafuji-Lun"
                className="flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className={`${isMobile ? "text-3xl" : "text-base"}`}/>
                {!isMobile && <span className="ml-2">Github</span>}
              </a>
            </li>
            <li className="hover:scale-110 cursor-pointer">
              <a
                href="https://www.linkedin.com/in/ryulun/"
                className="flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className={`${isMobile ? "text-3xl" : "text-base"}`}/>
                {!isMobile && <span className="ml-2">Linkedin</span>}
              </a>
            </li>
            <li className="hover:scale-110 cursor-pointer">
              <a
                href="https://docs.google.com/document/d/1LsHdHDT1QlYNuUpqcHDuX9iiHpufoeJY6G4o7vQz6IA/edit?usp=sharing"
                className="flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFileAlt className={`${isMobile ? "text-3xl" : "text-base"}`}/>
                {!isMobile && <span className="ml-2">Résumé</span>}
              </a>
            </li>
            <li className="hover:scale-110 cursor-pointer">
              <button
                onClick={openContactForm}
                className="flex items-center"
              >
                <FaPaperPlane className={`${isMobile ? "text-3xl" : "text-base"}`}/>
                {!isMobile && <span className="ml-2">Contact Me</span>}
              </button>
            </li>
          </ul>
        </footer>    
      </div>
    </div>
  );
};

export default Home;
