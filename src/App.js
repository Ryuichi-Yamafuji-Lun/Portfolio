import Headroom from "react-headroom";
import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import OtherProjects from "./pages/OtherProjects";
import Research from "./pages/Research";
import Contact from "./pages/Contact";

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
      {isMobile && (
        <Headroom>
          <NavBar />
        </Headroom>
      )}
      <div className="md:col-span-3">
        <div className={`sticky top-0 ${isMobile ? "" : "md:top-0"}`}>
          <Home />
        </div>
      </div>
      <div className="md:col-span-4">
        {/* Single-page application sections */}
        <About />
        <Research />
        <Project />
        <OtherProjects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
