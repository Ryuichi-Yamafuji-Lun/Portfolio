import Headroom from "react-headroom";
import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import OtherProjects from "./pages/OtherProjects";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";


function App() {
  // states of the website
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1150);
  const [isContactFormVisible, setIsContactFormVisible] = useState(false);

  // resizing
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1150);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // state of contact form
  const openContactForm = () => {
    setIsContactFormVisible(true);
  };

  const closeContactForm = () => {
    setIsContactFormVisible(false);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
      {isMobile && (
        <Headroom>
          <NavBar onContactClick={openContactForm}/>
        </Headroom>
      )}
      <div className="md:col-span-3">
        <div className={`sticky top-0 ${isMobile ? "" : "md:top-0"}`}>
          <Home openContactForm={openContactForm}/>
        </div>
      </div>
      <div className="md:col-span-4">
        {/* Single-page application sections */}
        <About />
        <Experience />
        <Project />
        <OtherProjects />
      </div>
      {isContactFormVisible && <Contact closeContactForm={closeContactForm} />}
    </div>
  );
}

export default App;
